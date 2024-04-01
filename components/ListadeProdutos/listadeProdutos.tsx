import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet ,FlatList} from "react-native";

async function fetchProduto() {
  const response = await fetch('http://localhost:8081/produto');
  const data = await response.json();
  return data;
}

export default function ListadeProdutos() {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProduto()
          .then((data) => {
            console.log(data.produtos)
            
            setData(data.produtos);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Erro ao buscar produtos:", error);
            setIsLoading(false);
          });
      }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
    
      ) : (
        data && data.length > 0 ? (
             <FlatList
              data={data}
              renderItem={({ item,index }) => (
                <View style={styles.container} key={index}>
                  <Text>Nome: {item.nome}</Text>
                  <Text>Preço: {item.preco}</Text>
                  <Text>Marca: {item.marca}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />

        ) : (
          <Text>Nenhum produto encontrado.</Text>
        )
      )}
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
     color:"#0000ff",
     borderColor:"black",

     borderRadius:4

    , alignContent:'center'
    ,alignItems:'center'
    ,flexDirection:'column',
    gap:2,
  },

})