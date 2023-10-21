import React,{useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
         <TouchableOpacity>
            <Text style={styles.headerBtn}>Show All</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
          
           {isLoading ? (
              <ActivityIndicator size='large' colors={COLORS.primary}/>
           ) : error ? (
              <Text>Something went wrong</Text>
           ) : (
              <FlatList 
                 data={[1,2,3,4]}
                 renderItem={({item}) => (
                   <PopularJobCard item={item}/>
                  )}
              />
           )}
      </View>
    </View>
  )
}

export default Popularjobs