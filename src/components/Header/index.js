import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

// styles
import style from './style.js';

// icons
import { ArrowLeft } from '../../assets/icons/index.js';



export default function Header({
  useIcon=false,
  title='<header title>',
  titleOnPress=() => console.log('<header titleOnPress>'),
  image=null,
  imageOnPress=() => console.log('<header imageOnPress>')
}) {
  return (
    <View style={style.component}>
      <TouchableOpacity style={style.titleWrapper} onPress={titleOnPress} activeOpacity={0.5}>
        {(useIcon) && <ArrowLeft style={style.icon} />}
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>

      {(image) && (
        <TouchableOpacity style={style.imageWrapper} onPress={imageOnPress} activeOpacity={0.5}>
          <Image style={style.image} source={image} />
        </TouchableOpacity>
      )}
    </View>
  );
};
