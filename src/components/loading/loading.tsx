import { View, Text } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
interface propsLoading {
loading:boolean
}

export default function Loading({loading}:propsLoading) {
  return (
    <>
    {loading === false ?
  <View>
      <Text>loading ...</Text>
    </View> : <Spinner/>
 }
 </>)
 }