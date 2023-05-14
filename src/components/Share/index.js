import { View, Text } from 'react-native';

// styles
import style from './style.js';

// components
import Button from '../Button/index.js';
import Gap from '../Gap/index.js';



export default function Share({ items }) {
  return (
    <View style={style.component}>
      <Text style={style.title}>Share</Text>
      {items.map((item, index) => (
        <View key={index}>
          <Button label={item.label} onPress={item.onPress} />
          {(items.length !== index + 1) && <Gap h={18} />}
        </View>
      ))}
    </View>
  );
};
