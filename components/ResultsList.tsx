import { FC } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { ResultItem } from './ResultItem';

import { useGetSearchResults } from '@/hooks/useGetSearchResults';
import { SearchItem } from '@/types/search';

type ResultsListProps = {
  searchQuery: string;
};

const keyExtractor = (item: SearchItem) => item.title;
const renderItem = ({ item }: { item: SearchItem }) => (
  <ResultItem
    author={item.author}
    title={item.title}
    price={item.price}
    imageUri={item.imageUri}
    description={item.description}
  />
);

export const ResultsList: FC<ResultsListProps> = ({ searchQuery }) => {
  const { data, isPending, error, onEndReached, isFetching } = useGetSearchResults(searchQuery);

  if (isPending) {
    return <ActivityIndicator style={styles.fullScreenLoader} />;
  }

  if (error) {
    return <View>Something went wrong...</View>;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      keyExtractor={keyExtractor}
      ListFooterComponent={isFetching ? <ActivityIndicator style={styles.footerLoader} /> : null}
    />
  );
};

const styles = StyleSheet.create({
  fullScreenLoader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerLoader: {
    marginBottom: 30
  }
});
