import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  label: isError => ({
    marginBottom: 6,

    fontWeight: '400',
    fontSize: 16,
    color: (!isError) ? globalStyle.color.black : '#D9435E'
  }),

  textInput: isError => ({
    borderWidth: 1,
    borderRadius: 8,
    borderColor: (!isError) ? globalStyle.color.black : '#D9435E',
    
    padding: 10,
    fontWeight: '400',
    fontSize: 14,
    color: (!isError) ? globalStyle.color.black : '#D9435E'
  })
});
