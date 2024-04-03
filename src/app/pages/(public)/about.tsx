import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function about() {
    const router = useRouter();

    const doLogout = () => {
      signOut();
    };
  
   

  return (
    <View>
      <Text style={styles.container} >about</Text>
  
      <Text onPress={()=>{router.replace('/')}}>Voltar</Text>
      <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
        <Ionicons name="log-out-outline" size={24} color={'#fff'} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        color: 'blue'
    }
})

function signOut() {
  throw new Error('Function not implemented.');
}
