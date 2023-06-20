import { useRouter } from 'expo-router';
import React from 'react'
import { View, Text, TouchableOpacity,  ActivityIndicator } from 'react-native'
import { SIZES } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    page: '1',
    num_pages: '1'
  });
  
  // console.log(data);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          // data.data
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs