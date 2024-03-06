import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

import { useDetails } from '@/context/DetailsContext';
import { SearchItem } from '@/types/search';

type ResultItemProps = SearchItem;

export const ResultItem: FC<ResultItemProps> = ({ imageUri, title, price, author, description }) => {
  const { setDetails } = useDetails();
  const router = useRouter();

  const onItemPress = () => {
    setDetails({ imageUri, title, price, author, description });
    router.push('/details');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.price}>{price} €</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  image: {
    height: 200
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 16
  },
  price: {
    marginTop: 6,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
