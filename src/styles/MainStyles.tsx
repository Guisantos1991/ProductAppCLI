import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const MainContainer = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 100,
  },
}))`
  flex: 1;
  background-color: #fff;
  padding: 5px;
`;

export const MainHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 10px;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: #000;
  font-family: 'Montserrat-Bold';
`;

export const NameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4f46e5;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const MidText = styled.Text`
  font-size: 24px;
  font-family: 'Montserrat-Bold';
  color: #000;
  margin-top: 20px;
  margin-left: 10px;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;   
  gap: 10px;
`;

export const CategoryButton = styled.TouchableOpacity`
  border-radius: 15px;
  border: 2px solid #4f46e5;
  padding: 5px 10px;
`;

export const ButtonText = styled.Text`
  font-size: 10px;
  font-family: 'Montserrat-Bold';
  color: #000;
`;