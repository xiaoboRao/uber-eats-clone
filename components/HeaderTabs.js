import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <View style={{ display: 'flex', direction: 'row' }}>
      <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab} text="Delivery" />
      <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab} text="Pickup" />
    </View>
  )
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}
