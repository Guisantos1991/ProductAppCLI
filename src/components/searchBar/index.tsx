import React from 'react';
import { SearchContainer, SearchInput, SearchButton } from '../../styles/searchBarStyles';
import SearchIcon from '../../../assets/icon/searchIcon.png';
import {Image} from 'react-native';
const SearchBar = ({ onSearch }: { onSearch: (text: string) => void }) => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search"
        onChangeText={onSearch}
      />
      <SearchButton>
        <Image
          source={SearchIcon}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </SearchButton>
    </SearchContainer>
  );
};
export default SearchBar;