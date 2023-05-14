import { View, Image, Text } from 'react-native';

// styles
import globalStyle from '../../globalStyle';
import style from './style.js';

// components
import {
  Header,
  Gap,
  MainValue,
  Share
} from '../../components';



export default function Profil({ navigation, profilePicture }) {
  function kembaliOnPress() {
    navigation.pop();
  }

  function shareWhatsappOnPress() {
    console.log('shareWhatsappOnPress');
  }

  function shareInstagramOnPress() {
    console.log('shareInstagramOnPress');
  }





  return (
    <View style={globalStyle.screenWrapper}>
      <Header useIcon={true} title='Kembali' titleOnPress={kembaliOnPress} />

      <View style={style.main}>
        <Image style={style.image} source={profilePicture} />
        <Gap h={12} />
        <MainValue value='Tiovaldo' />
        <Gap h={20} />
        <View style={style.mainInfoWrapper}>
            <Text style={[style.mainInfoLeft, style.mainInfoText()]}>email : </Text>
            <Text style={[style.mainInfoRight, style.mainInfoText(true)]}>tiovaldo@gmail.com</Text>
          </View>
          <Gap h={12} />
          <View style={style.mainInfoWrapper}>
            <Text style={[style.mainInfoLeft, style.mainInfoText()]}>No.HP :</Text>
            <Text style={[style.mainInfoRight, style.mainInfoText()]}>081234567890</Text>
          </View>
      </View>

      <Gap h={10} />
      <View style={globalStyle.screen}>
        <Share items={[
          {label: 'Whatsapp', onPress: shareWhatsappOnPress},
          {label: 'Instagram', onPress: shareInstagramOnPress}
        ]} />
      </View>
    </View>
  );
};
