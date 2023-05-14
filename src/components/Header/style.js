import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  component: {
    height: 88,
    backgroundColor: globalStyle.color.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 24,
  },

  titleWrapper: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    marginRight: 32
  },
  title: {
    fontWeight: '500',
    fontSize: 22,
    color: globalStyle.color.black
  },

  imageWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 52,
    width: 52,
    borderRadius: 52/2,
  }
});
