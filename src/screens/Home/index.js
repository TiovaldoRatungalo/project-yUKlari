import { View, Text } from 'react-native';

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



export default function Home({ navigation, profilePicture }) {
  function profilePictureOnPress() {
    navigation.push('Profil');
  }

  function shareWhatsappOnPress() {
    console.log('shareWhatsappOnPress');
  }

  function shareInstagramOnPress() {
    console.log('shareInstagramOnPress');
  }

  function shareSaveAsPitureOnPress() {
    console.log('shareSaveAsPitureOnPress');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <Header title='yUKlari' image={profilePicture} imageOnPress={profilePictureOnPress} />
      <View style={[globalStyle.screen, style.screen]}>

        <View>
          <Text style={style.mainTitle}>Jarak yang di tempuh</Text>
          <Gap h={12} />
          <MainValue value='1 KiloMeter' />
          <Gap h={20} />
          <View style={style.mainInfoWrapper}>
            <Text style={style.mainInfoLeft}>Langkah</Text>
            <Text style={style.mainInfoRight}>1.400</Text>
          </View>
          <Gap h={12} />
          <View style={style.mainInfoWrapper}>
            <Text style={style.mainInfoLeft}>Waktu</Text>
            <Text style={style.mainInfoRight}>16m</Text>
          </View>
        </View>

        <Gap h={70} />
        <Share items={[
          {label: 'Whatsapp', onPress: shareWhatsappOnPress},
          {label: 'Instagram', onPress: shareInstagramOnPress},
          {label: 'Save As Picture', onPress: shareSaveAsPitureOnPress}
        ]} />
      </View>
    </View>
  );
};
