import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router';

export default function about() {
    const router = useRouter();

  return (
    <View>
      <Text style={styles.container} >about</Text>
  
      <Text onPress={()=>{router.replace('/')}}>Voltar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        color: 'blue'
    }
})