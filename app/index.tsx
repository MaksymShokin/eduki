import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ResultsList } from '@/components/ResultsList';
import { SearchInput } from '@/components/SearchInput';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={styles.resultsList}>
        <ResultsList searchQuery={searchQuery} />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultsList: {
    flex: 1,
    width: '100%'
  }
});
