import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet ,FlatList} from "react-native";

async function fetchProduto() {
  const response = await fetch('http://localhost:8081/listaproduto');
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
    <View style={{ flex: 1, justifyContent: "center", width:'99%', alignItems: "center" }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
    
      ) : (
        data && data.length > 0 ? (
             <FlatList
              data={data}
              horizontal={true}
              renderItem={({ item,index }) => (
                <View style={styles.container} key={index}>
                  <Text style={styles.hearderText}>Nome: {item.nome}</Text>
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
     
     borderColor:"white",
     margin:15,
     padding:10,
     borderRadius:10,
 
     borderWidth:4,
     alignContent:'center',
    alignItems:'center',
    flexDirection:'column',    gap:2,
  },

  hearderText:{
    color:"rgb(255 237 213)",
    fontWeight:"400",
  }
})