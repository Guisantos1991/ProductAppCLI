import React from 'react';
import { Container, Head, HeadImage, MidTitle, MiddleText } from '../styles/HomeStyles';
import HomeImageHeader from '../../assets/images/notebook-1.jpg';
import { GetStartedButton } from '../components/button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';


type IndexScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Index'>;
const Index = () => {
  const navigation = useNavigation<IndexScreenNavigationProp>();


  const handleGetStarted = () => {
    navigation.navigate('Main');
  };

  return (
    <Container>
      <Head>
        <HeadImage source={HomeImageHeader} />
      </Head>

      <MidTitle>
        <MiddleText marginTop={-60} fontFamily="Montserrat-Bold" color="#fff">Shopping</MiddleText>
        <MiddleText marginTop={10} color="#000" fontFamily="Montserrat-SemiBold">Royal</MiddleText>
        <MiddleText marginTop={1} color="#000" fontSize={20} fontFamily="Montserrat-Regular">
          The best shopping for your electronics
        </MiddleText>
      </MidTitle>

      <MiddleText color="#000" fontSize={16} fontFamily="Montserrat-Regular">
        Hi there! Welcome to our shopping app! We're excited to have you here.
        Whether you're looking for the latest trends or the perfect gift, we've got you covered.
        Happy shopping!
      </MiddleText>

      <GetStartedButton style={{ marginTop: 100, width: 300 }} title="Get Start!"
        onPress={handleGetStarted}
      />
    </Container>
  );
};

export default Index;