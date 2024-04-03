import { Image } from 'react-native';
import React, { ComponentProps, useEffect, useMemo, useState } from 'react';
import { DataProdutos } from '../../api/products/products';


type RemoteImageProps = {
  path?: string | null;
  fallback: string;
} & Omit<ComponentProps<typeof Image>, 'source'>;

const RemoteImage = ({ path, fallback, ...imageProps }: RemoteImageProps) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (!path) return;
    (async () => {
      setImage('');
      DataProdutos().then((data)=>{
        console.log(data)
        try {
            setImage(data.imagem)
        } catch (error) {
            console.log(error)
        }
      })
         })();
  }, [path]);

  if (!image) {
  }

  return <Image source={{ uri: image || fallback }} {...imageProps} />;
};

export default RemoteImage;