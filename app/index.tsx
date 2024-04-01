import { Pressable, View ,Text, SafeAreaView,StyleSheet,ScrollView} from 'react-native';

import { Link } from 'expo-router';
import ListadeProdutos from '../components/ListadeProdutos/listadeProdutos';


export default function Page() {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <Link href="/about">About</Link>

      <Link href="/produtos/1">
      View user
            
        </Link>
        <View style={Styles.Listadeprodutos}>
           
        <ListadeProdutos/>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const Styles=StyleSheet.create({
  Listadeprodutos:{
    backgroundColor:"green", 
    flex:1,
    maxHeight:'100%',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center', 
    minHeight:'100%' 

  }
})