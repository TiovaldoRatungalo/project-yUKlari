import { View, Text, TextInput } from 'react-native';

// styles
import style from './style.js';



export default function Input({
  label='<input label>',
  type='default',
  placeholder='<input placeholder>',
  value='<input value>',
  onChangeText=() => console.log('<input onChangeText>'),
  hideText=false,
  isError=false
}) {
  return (
    <View style={style.component}>
      <Text style={style.label(isError)}>{label}</Text>
      <TextInput
        style={style.textInput(isError)}
        keyboardType={type}
        placeholder={placeholder}
        placeholderTextColor='#8D92A3'
        value={value}
        secureTextEntry={hideText}
        onChangeText={value => onChangeText(value)}
      /> 
    </View>
  );
};
