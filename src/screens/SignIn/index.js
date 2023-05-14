import { useState } from 'react';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';

// styles
import globalStyle from '../../globalStyle';

// components
import {
  Header,
  Input,
  Gap,
  Button
} from '../../components';



function signInErrorMessage(desc) {
  showMessage({
    type: 'danger',
    message: 'Error to sign in',
    description: desc
  });
}



export default function SignIn({ navigation }) {
  const [emailAddress, setEmailAddress] = useState('');
  const [emailAddressError, setEmailAddressError] = useState('Email address must not be empty.');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('Password must not be empty.');



  function exitOnPress() {
    console.log('exitOnPress');
  }

  function emailAddressOnChangeText(thisEmailAddress) {
    setEmailAddress(thisEmailAddress);

    if(thisEmailAddress === '') setEmailAddressError('Email must not be empty.');
    else setEmailAddressError(false);
  }
  
  function passwordOnChangeText(thisPassword) {
    setPassword(thisPassword);

    if(thisPassword === '') setPasswordError('Password must not be empty.');
    else setPasswordError(false);
  }

  function signInOnPress() {
    console.log(`Email Address = ${emailAddress} | Password = ${password}`);

    if (emailAddressError) signInErrorMessage(emailAddressError);
    else if (passwordError) signInErrorMessage(passwordError);
    else navigation.replace('Home');
  }

  function createNewAccountOnPress() {
    navigation.push('SignUp');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      
      <Header title='Exit' titleOnPress={exitOnPress} />
      <View style={globalStyle.screen}>
        <Input
          label='Email Address'
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
          hideText={true}
          isError={passwordError}
        />
        
        <Gap h={28} />
        <Button label='Sign In' onPress={signInOnPress} />
        <Gap h={12} />
        <Button type='secondary' label='Create New Account' onPress={createNewAccountOnPress} />
      </View>
    </View>
  );
};
