import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'; 
import styled from 'styled-components/native';


interface TextProps {
    fontSize?: number;
    color?: string;
    marginBottom?: number;
    marginTop?: number;
    fontFamily?: string;

};


export const Container = styled(View)`
    flex: 1;
    align-items: center;
    margin-top: -70px;


`;


export const HeaderCard = styled(View)`
    width: 100%;
    height: 400px;
    background-color: #fff;
    border-radius: 20px;
    object-fit: cover;

`;

export const ImageCard = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

`;

export const CardInfo = styled(View)`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    align-items: center;
    flex-direction: column;
`;

export const CardText = styled(Text)<TextProps>`
    font-size: ${({ fontSize }: TextProps) => fontSize || 16}px;
    font-family: ${({ fontFamily }: TextProps) => fontFamily || 'Montserrat-Regular'};
    color: ${({ color }: TextProps) => color || '#000'};
    margin-bottom: ${({ marginBottom }: TextProps) => marginBottom || 0}px;
    margin-top: ${({ marginTop }: TextProps) => marginTop || 0}px;
    align-items: center;
    justify-content: center;
`;


export const ButtonsHome = styled(View)`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    align-items: center;
`;

export const BottomContainer = styled(View)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;