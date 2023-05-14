import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  screen: {
    paddingTop: 54
  },

  mainTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: 'blue'
  },
  mainInfoWrapper: {
    flexDirection: 'row'
  },
  mainInfoLeft: {
    flex: 1,

    fontWeight: '400',
    fontSize: 14,
    color: '#000000'
  },
  mainInfoRight: {
    flex: 2,

    fontWeight: '500',
    fontSize: 14,
    color: '#000000'
  }
});
