import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ResturantItems(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={{ marginBottom: 30 }}>
      {props.resturantData.map((resturant, index) => (
        <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }} key={index}>
          <ResturantImage image={resturant.image_url} />
          <ResturantInfo name={resturant.name} rating={resturant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  )
}

const ResturantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color={'white'} />
    </TouchableOpacity>
  </>
)

const ResturantInfo = (props) => (
  <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30 - 53 minutes</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
)
