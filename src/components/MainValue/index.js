import { View, Text } from 'react-native';

// styles
import style from './style.js';



export default function MainValue({ value }) {
  return (
    <View style={style.component}>
      <Text style={style.value}>{value}</Text>
    </View>
  );
};
