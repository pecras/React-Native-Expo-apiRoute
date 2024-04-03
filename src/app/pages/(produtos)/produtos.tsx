import { View, Text } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import ListadeProdutos from '../../../components/ListadeProdutos/listadeProdutos';

const Products = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <ListadeProdutos/>
    </View>
  );
};

export default Products;