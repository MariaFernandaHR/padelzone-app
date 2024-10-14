import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
  return(
    <View style={styles.container}>
      <View style={styles.footerNav}>
          <Icon name="home-outline" size={30} color="white" />
          <Icon name="trophy-outline" size={30} color="white" />
          <Icon name="person-outline" size={30} color="white" />
          <Icon name="calendar-outline" size={30} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    footerNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%', // Asegura que ocupe todo el ancho
      paddingHorizontal: 10,
      backgroundColor: '#86D7F7', // Cambia el color de fondo como prefieras
      borderRadius: 40, // Esquinas redondeadas
      paddingVertical: 10, // Espaciado vertical interno
      marginBottom:20
      },
  });
  

export default Footer;