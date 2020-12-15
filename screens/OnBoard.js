import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image  } from 'react-native';

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
        backgroundColor: '#aee4d0', 
        image: <Image 
            style={{
                width: 200,
                height: 180,
            }}
            source={require('../assets/search.png')} />,
        title: 'Encontra o que procuras',
        subtitle: 'Saiba em primeira mão quem está a procura ou  a venda de um determinado produto.',
      },

      {
        backgroundColor: '#fded93',
        image: <Image
        style={{
            width: 200,
            height: 180
        }}
        source={require('../assets/pambala.png')} />,
        title: 'Aproveite os Negócios',
        subtitle: 'Explore várias oportunidades de negocios que o Kezuké lhe proporciona.',
      },

    ]}
  />
  );
}

export default OnVoard;