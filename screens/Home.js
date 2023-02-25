import React from 'react'
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SafeViewAndroid from '../components/SafeViewAndroid '
export default function Home() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <HeaderTabs />
    </SafeAreaView>
  )
}
