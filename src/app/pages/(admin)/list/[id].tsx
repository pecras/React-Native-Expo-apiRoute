import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import { useState } from 'react';
import Button from '../../../../components/Buton/Button';


import { FontAwesome } from '@expo/vector-icons';


import { ProductSize } from '../../../../types/types';
import Colors from '../../../../constants/Colors';
import RemoteImage from '../../../../components/RemoteImag.tsx/Remoteimage';
import { defaultPizzaImage } from '../../../../components/ProductListItem/ProductListemItem';

const sizes: ProductSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);


  async function fetchProduto() {
    const response = await fetch(`http://localhost:8081/listaproduto?id=${id}`);
    const data = await response.json();
    return data;
  }
  

  const router = useRouter();


  const [product,setProduct]=useState("")
  const [addItem,setAddItem]=useState("")
const [isLoading,setisLoading] =useState(false)
  const [selectedSize, setSelectedSize] = useState<ProductSize>('M');

  const addToCart = () => {
    if (!product) {
      return;
    }
   setAddItem(product);
    router.push('/cart');
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  

  return (
    <View style={styles.container}>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ProductDetailsScreen;