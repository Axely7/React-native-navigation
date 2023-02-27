import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.btnGrand, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Axel',
            })
          }>
          <Text style={styles.btnText}>Axel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btnGrand, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Eduardo',
            })
          }>
          <Text style={styles.btnText}>Eduardo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
