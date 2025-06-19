import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from '../../styles/ComponentsStyles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function GetStartedButton({ title, onPress, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
