import { TouchableOpacity, Text } from 'react-native';

// styles
import style from './style.js';



export default function Button({ type='primary', label='<button label>', onPress=() => console.log('<button OnPress>')}) {
  return (
    <TouchableOpacity style={style.component(type)} onPress={onPress} activeOpacity={0.5}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};
