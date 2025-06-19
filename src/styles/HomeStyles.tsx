import styled from "styled-components/native";
import { View, Image, Text } from  "react-native";


interface TextProps {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    marginBottom?: number;
    marginTop?: number;
    fontFamily?: string;

};


export const Container = styled(View)`
    flex: 1;
    background-color: #eaeaea;
    flex-direction: column; 
    align-items: center;

`;

export const Head = styled(View)`
    width: 100%;
    height: 400;
    justify-content: center;
    align-items: center;
    background-color: #3a3a4c;
    border-radius: 20px;
`


export const HeadImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

`
export const MidTitle = styled(View)`
    width: 100%;
    height: 150;
    justify-content: flex-start;
    align-items: flex-start;
    

`;


export const MiddleText = styled(Text)<TextProps>`
  font-size: ${(props: TextProps) => props.fontSize ? props.fontSize : 40}px;
  font-family: ${(props: TextProps) => props.fontFamily ? props.fontFamily : 'Montserrat-Bold'};
  color: #fff ;
  margin-bottom: ${(props: TextProps) => props.marginBottom ? props.marginBottom : 0};
  margin-top: ${(props: TextProps) => props.marginTop ? props.marginTop : 0};
  margin-left: 10;
  color: ${(props: TextProps) => props.color ? props.color : '#fff'};
`;
