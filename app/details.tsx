import { FC } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';

import { orange, white } from '@/constants/colors';
import { useDetails } from '@/context/DetailsContext';

const screenHeaderStyles = {
  headerStyle: { backgroundColor: orange },
  headerTintColor: white
};

const Details: FC = () => {
  const { details } = useDetails();
  const { height } = useWindowDimensions();

  const screenOptions = {
    title: details?.title,
    ...screenHeaderStyles
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={screenOptions} />
      <Image style={imageStyles(height).image} source={{ uri: details?.imageUri }} />
      <Text style={styles.title}>{details?.title}</Text>
      <Text style={styles.author}>{details?.author}</Text>
      <Text style={styles.price}>{details?.price} €</Text>
      <Text style={styles.description}>{details?.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  price: {
    marginTop: 6,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const imageStyles = (height: number) =>
  StyleSheet.create({
    image: {
      height: height / 2
    }
  });

export default Details;
