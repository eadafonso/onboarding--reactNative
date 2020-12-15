import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Button  } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
    <TouchableOpacity {...props} style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 16}}>Pular</Text>
    </TouchableOpacity>
)

const Next = ({...props}) => (
    <TouchableOpacity {...props} style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 16}}>Proxímo</Text>
    </TouchableOpacity>
)

const Done = ({...props}) => (
    <TouchableOpacity {...props} style={{paddingHorizontal: 20}}>
        <Text  style={{fontSize: 16}}>Feito</Text>
    </TouchableOpacity>
)

const OnVoard = ({navigation}) => {
  return (
    <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.navigate('Login')}
        onDone={() => navigation.navigate('Login')}
    pages={[
      {
        backgroundColor: '#fff', 
        // image: <Image source={require('./images/circle.png')} />,
        title: 'Edvaldo',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

      {
        backgroundColor: '#099',
        // image: <Image source={require('./images/circle.png')} />,
        title: 'Afonso',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    ]}
  />
  );
}

export default OnVoard;