import { useEffect } from 'react';
import { View, Image, Text } from 'react-native';

// styles
import style from './style.js';

// images
import { yUKlari } from '../../assets/images';



export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1500);
  }, []);



  return (
    <View style={style.screen}>
      <Image source={yUKlari} />
      <Text style={style.title}>yUKlari</Text>
    </View>
  );
};
