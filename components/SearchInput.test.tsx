import { render } from '@testing-library/react-native';

import { SearchInput, SearchInputProps, SearchInputTestIds } from './SearchInput';

const propsMock = {
  searchQuery: 'something',
  setSearchQuery: jest.fn()
} satisfies SearchInputProps;

describe('SearchInput', () => {
  it('should render', () => {
    const { getByTestId } = render(<SearchInput {...propsMock} />);

    expect(getByTestId(SearchInputTestIds.container)).toBeDefined();
    expect(getByTestId(SearchInputTestIds.container)).not.toBeEmptyElement();
  });
});
