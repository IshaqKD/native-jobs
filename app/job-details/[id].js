import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react';
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import {COLORS, icons, SIZES} from '../../constants'
import useFetch from '../../hook/useFetch';

const tabs = ["About", "Qualifications", "Responsisbilities"]

const JobDetails = () => {
    const router = useRouter();
    const params = useSearchParams();
    const {data, isLaoding, error, refetch} = useFetch('job-details', {
        'job_id': params.id
    })

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, []);

    const displayTabContetnt = () => {
        switch (activeTab) {
            case "Qualifications":
                return <Specifics 
                    title="Qualifications"
                    points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                />
            case "About":
                return <JobAbout 
                    info={data[0].job_description ?? "No data provided"}
                />
            case "Responsisbilities":
                return <Specifics 
                    title="Responsisbilities"
                    points={data[0].job_highlights?.Responsisbilities ?? ['N/A']}
                />
        
            default:
                break;
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options = {{ 
                    headerStyle: {backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    ),
                    headerTitle: ''
                }}
            />
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    {isLaoding ? (
                        <ActivityIndicator size="large"/>
                    ) : error ? (
                        // console.log(error)
                        <Text>Something Went Wrong -- {error.message}</Text>
                    ) : data.length === 0 ? (
                        <Text>no data</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company 
                                companyLogo = {data[0].employer_logo}
                                jobTitle = {data[0].job_title}
                                companyName = {data[0].employer_name}
                                location = {data[0].job_country}
                            />
                            <JobTabs 
                                tabs = {tabs}
                                activeTab = {activeTab}
                                setActiveTab = {setActiveTab}
                            />

                            {displayTabContetnt()}
                        </View>
                    )}
                </ScrollView>

                <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'} />
            </>
        </SafeAreaView>
    )
}

export default JobDetails