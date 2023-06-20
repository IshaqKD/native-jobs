import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'

import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    page: '1',
    num_pages: '1'
  });
  
  // console.log(data);
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large"/>
        ) : error ? (
          <Text>Something Went Wrong -- {error.message}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard
                item={item}
                selectedJob = {selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{columnGap: SIZES.small}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs