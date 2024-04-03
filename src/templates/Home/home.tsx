import { Pressable, View ,Text, SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import { ClerkProvider } from "@clerk/clerk-expo";
import { Link } from 'expo-router';
import ListadeProdutos from '../../components/ListadeProdutos/listadeProdutos';


export default function Page() {
  return (

    <SafeAreaView style={Styles.container}>
      <ScrollView >
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
container:{
width:'100%',
flex:1,

    alignContent:'center',
    justifyContent:'center',
    alignItems:'center', 


},

  Listadeprodutos:{
    width:'100%',
    backgroundColor:'rgb(194 65 12)', 
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center', 
    borderColor:'orange',
    borderWidth:5,
    borderRadius:20,

  }
})