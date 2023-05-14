import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  main: {
    backgroundColor: globalStyle.color.primary,
    
    paddingHorizontal: 24,
    paddingBottom: 42
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100/2,
    alignSelf: 'center'
  },
  mainInfoWrapper: {
    flexDirection: 'row'
  },
  mainInfoText: (underline=false) => ({
    fontWeight: '500',
    textDecorationLine: (underline) ? 'underline' : 'none',
    fontSize: 14,
    color: '#000000'
  }),
  mainInfoLeft: {
    flex: 1,
  },
  mainInfoRight: {
    flex: 2
  }
});
