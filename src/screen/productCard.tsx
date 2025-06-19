import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes';
import {
  Container,
  HeaderCard,
  ImageCard,
  CardText,
  CardInfo,
  ButtonsHome,
  BottomContainer,
  RowBetween
} from '../styles/cardStyles';

import {Image, } from 'react-native';
import { Products } from '../data/Products';
import { ProductButton } from '../styles/ProductsStyles';
import HomeIcon from '../../assets/icon/homeIcon.png'
import BuyIcon from '../../assets/icon/shopIcon.png'

type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;

const ProductCard = () => {
  const route = useRoute<ProductRouteProp>();
  const navigation = useNavigation();
  const { productId } = route.params;

  const product = Products.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <Container>
        <CardText fontSize={18} fontFamily="Inter-Bold">
          Produto não encontrado.
        </CardText>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderCard>
        <ImageCard source={product.image} />
      </HeaderCard>

      <CardInfo>
        <ProductButton onPress={() => navigation.goBack()} width={40}>
          <Image
            source={HomeIcon}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </ProductButton>
        <CardText fontSize={24} color="#3a3a4c" marginBottom={30} marginTop={10} fontFamily="Inter-SemiBold">
          {product.name}
        </CardText>
        <CardText fontFamily="Inter-Regular" fontSize={14} color="#808080" marginBottom={30}>
          Produto de alta qualidade, com garantia estendida e suporte AppleCare.
        </CardText>
      </CardInfo>

      <CardText fontFamily='Inter-Regular' fontSize={20} color='#808080'>
        Status: {product.inStock ? 'Disponível' : 'Indisponível'}
      </CardText>

      <BottomContainer>
        <ButtonsHome />

        <ButtonsHome>
          <RowBetween>
            <CardText fontSize={34} color="#3a3a4c" fontFamily="Inter-SemiBold">
              ${product.price}
            </CardText>
            <ProductButton>
              <Image
                source={BuyIcon}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </ProductButton>
          </RowBetween>
        </ButtonsHome>
      </BottomContainer>
    </Container>
  );
};

export default ProductCard;