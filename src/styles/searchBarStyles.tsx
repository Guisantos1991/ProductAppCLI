
import styled from 'styled-components/native';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

export const SearchContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 50px;
`;

export const SearchInput = styled(TextInput)`
    background-color: #e2dbdb;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    font-family: 'Montserrat-Regular';
    font-size: 16px;
`;


export const SearchButton = styled(TouchableOpacity)`
  background-color: #6E56FF;
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-left: 8px;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;


