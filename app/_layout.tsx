import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name='index' options={{headerTitle:"Página Principal",
headerStyle:{
    backgroundColor:"red"
}}}/>
    <Stack.Screen name='produtos/[id]' options={{headerTitle:"Produtos",
headerStyle:{
    backgroundColor:"orange"
}}}/>
    <Stack.Screen name='about' options={{headerTitle:"Sobre",
headerStyle:{
    backgroundColor:"yellow"
}}}/>
  </Stack >);
}
