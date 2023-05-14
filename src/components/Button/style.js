import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  component: type => ({
    borderRadius: 8,
    backgroundColor: (type === 'primary') ? globalStyle.color.primary : '#484848',
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 12
  }),
  label: {
    fontWeight: '500',
    fontSize: 14,
    color: '#FFFFFF'
  }
});
