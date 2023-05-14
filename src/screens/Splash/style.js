import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: globalStyle.color.primary,

    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    borderWidth: 1,
    borderColor: globalStyle.color.primary,

    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 36,
    color: globalStyle.color.black
  }
});
