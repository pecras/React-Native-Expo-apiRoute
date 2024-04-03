import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet ,FlatList} from "react-native";

export async function DataProdutos() {
  const response = await fetch('http://localhost:8081/listaproduto');
  const data = await response.json();
  return data;
}


