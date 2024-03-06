import { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { gray, white } from '@/constants/colors';

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ searchQuery, setSearchQuery }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholderTextColor={gray}
      placeholder='Search...'
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center'
  },
  input: {
    width: '90%',
    fontSize: 18,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: white,
    borderWidth: 1
  }
});
