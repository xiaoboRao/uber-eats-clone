import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import ResturantItems, { localRestaurants } from '../components/ResturantItems'
import SafeViewAndroid from '../components/SafeViewAndroid '
import SearchBar from '../components/SearchBar'

const YELP_API_KEY =
  '8Ab9yGAx2nK40EqOQdaKruHtYGuypyCCSb-Ta62I5BdH8SOwqIeIWZhEhQl5tDSWvrQgplLmFJbel7Wy2ZqUHCWjunTDK1f--AZA2UzDBp1qP7eR7OFp4XZ_liH8Y3Yx'

export default function Home() {
  const [resturantData, setResturantData] = useState([])

  const getResturantDataFromYelp = () => {
    const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=resturant&location=losangeles'

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
    return fetch(yelpUrl, apiOptions)
      .then((response) => response.json())
      .then((json) => setResturantData(json.businesses))
  }
  useEffect(() => {
    getResturantDataFromYelp()
  }, [])
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturantData={resturantData} />
      </ScrollView>
    </SafeAreaView>
  )
}
