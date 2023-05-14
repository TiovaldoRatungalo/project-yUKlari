import { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';

// styles
import globalStyle from '../../globalStyle';
import style from './style.js';

// components
import {
  Header,
  Gap,
  Input,
  Button
} from '../../components';

// images
import { DefaultProfilePicture } from '../../assets/images';



function signUpErrorMessage(desc) {
  showMessage({
    type: 'danger',
    message: 'Error to sign up',
    description: desc
  });
}



export default function SignUp({ navigation, profilePicture, setProfilePicture }) {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('Full name must not be empty.');
  const [emailAddress, setEmailAddress] = useState('');
  const [emailAddressError, setEmailAddressError] = useState('Email address must not be empty.');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('Password must not be empty.');



  function kembaliOnPress() {
    navigation.pop();
  }

  async function addPhotoOnPress() {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      includeBase64: true
    });

    if(result.didCancel) {
      setProfilePicture(DefaultProfilePicture);
      showMessage({
        type: 'danger',
        message: 'Failed to set profile picture.'
      });
    }
    else {
      setProfilePicture({uri: result.assets[0].uri});
    }
  }

  function fullNameOnChangeText(thisFullName) {
    setFullName(thisFullName);

    if(thisFullName === '') setFullNameError('Full name must not be empty.');
    else setFullNameError(false);
  }

  function emailAddressOnChangeText(thisEmailAddress) {
    setEmailAddress(thisEmailAddress);

    if(thisEmailAddress === '') setEmailAddressError('Email address must not be empty.');
    else setEmailAddressError(false);
  }
  
  function passwordOnChangeText(thisPassword) {
    setPassword(thisPassword);

    if(thisPassword === '') setPasswordError('Password must not be empty.');
    else setPasswordError(false);
  }

  function signUpOnPress() {
    console.log(`Full Name = ${fullName} | Email Address = ${emailAddress} | Password = ${password}`);
    
    if (fullNameError) signUpErrorMessage(fullNameError);
    else if (emailAddressError) signUpErrorMessage(emailAddressError);
    else if (passwordError) signUpErrorMessage(passwordError);
    else navigation.replace('Home');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <Header useIcon={true} title='Kembali' titleOnPress={kembaliOnPress} />
      <View style={globalStyle.screen}>
        <TouchableOpacity style={style.addPhotoWrapper} onPress={addPhotoOnPress}>
            {(DefaultProfilePicture === profilePicture) ? (
              <View style={style.addPhoto} activeOpacity={0.5}>
                <Text style={style.addPhotoText}>Add Photo</Text>
              </View>
            ) : (
              <Image style={style.addPhoto} source={profilePicture} />
            )}
        </TouchableOpacity>

        <Gap h={16} />
        <Input
          label='Full Name'
          placeholder='Type your full name'
          value={fullName}
          onChangeText={value => fullNameOnChangeText(value)}
          isError={fullNameError}
        />
        <Gap h={16} />
        <Input
          label='Email Address'
          type='email-address'
          placeholder='Type your email address'
          value={emailAddress}
          onChangeText={value => emailAddressOnChangeText(value)}
          isError={emailAddressError}
        />
        <Gap h={16} />
        <Input
          label='Password'
          placeholder='Type your password'
          value={password}
          onChangeText={value => passwordOnChangeText(value)}
          isError={passwordError}
          hideText={true}
        />

        <Gap h={24} />
        <Button label='SignUp' onPress={signUpOnPress} />
      </View>
    </View>
  );
};
