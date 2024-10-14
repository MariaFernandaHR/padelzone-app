import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Footer from '../components/Footer.js';

const HomeScreen = () => {
  const schedule = [
    { time: '9 PM', event: 'Americano 4ta Categoría', available: true },
    { time: '10 PM', event: 'Disponible', available: false }
  ];

  const ranking = [
    { name: 'John Bennett', rating: 6.9, position: '1st' },
    { name: 'Carlos Martinez', rating: 6.5, position: '2nd' },
    { name: 'Michael Davidson', rating: 6.2, position: '3rd' }
  ];

  return (
    <View style={styles.screenContainer}>
      <ScrollView style={styles.container}>
        
  
        <View style={styles.header}>
    
          <View style={styles.imageAndTextContainer}>
            <ImageBackground
              source={{ uri: 'https://via.placeholder.com/300' }} 
              style={styles.circle}
              imageStyle={styles.image}
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.welcomeText}>Hi, PadelZoner</Text>
              <Text style={styles.nameText}>John Doe</Text>
            </View>
          </View>
    
          <Image source={require('../assets/pz.png')} style={styles.logo} />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.semiCircle}>
            <Text style={styles.sectionText}>PRÓXIMOS AMERICANOS</Text>
          </View>
        </View>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}
        >
           <View style={styles.calendarContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, index) => (
                <View key={index} style={styles.dayContainer}>
                  <View style={styles.dateCircle}>
                    <Text style={styles.dateText}>{index + 9}</Text>
                    <Text style={styles.dayText}>{day}</Text>
                    </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Este es el contenido sobre la imagen de fondo</Text>
          </View>
        </ImageBackground>
  
       


        <View>
          {schedule.map((item, index) => (
            <View key={index} style={styles.scheduleItem}>
              <Text style={styles.timeText}>{item.time}</Text>
              <Text style={styles.eventText}>{item.event}</Text>
              {item.available && (
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Reservar</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

  
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionText}>RANKING DE TU CATEGORÍA</Text>
        </View>
        <View>
          {ranking.map((item, index) => (
            <View key={index} style={styles.rankingItem}>
              <Text style={styles.rankingPosition}>{item.position}</Text>
              <View style={styles.rankingDetails}>
                <Text style={styles.rankingName}>{item.name}</Text>
                <Text style={styles.rankingRating}>⭐ {item.rating}</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>


      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
  },
  container: {
    marginTop: 15,
    flexGrow: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  imageAndTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  headerTextContainer: {
    marginLeft: 10, 
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 12,
  },
  logo: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  calendarContainer: {
    flexDirection: 'row',
    padding:10,
    marginBottom: 20,
  },
  dayContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    
  },
  dayText: {
    fontSize: 10,
    textAlign:'center',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 20,
    textAlign:'center',
    marginTop: 5,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    fontWeight: 'ligth',
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  eventText: {
    fontSize: 14,
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 12,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rankingPosition: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  rankingDetails: {
    flexDirection: 'column',
  },
  rankingName: {
    fontSize: 14,
  },
  rankingRating: {
    fontSize: 12,
  },
  circle: {
    width: 40, 
    height: 40,
    borderRadius: 75, 
    overflow: 'hidden', 
  },
  image: {
    resizeMode: 'cover', 
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  semiCircle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', 
    paddingHorizontal: 10,
    backgroundColor: 'rgba(134, 215, 247, 0.6)',
    borderRadius: 40, 
    paddingVertical: 10, 
    marginBottom:20,
    },
    backgroundImage: {
      flex: 1, 
      width: '100%', 
      height: '100%', 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    image: {
      resizeMode: 'cover', 
    },
    contentContainer: {
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      borderRadius: 10,
    },
    text: {
      color: 'black',
      fontSize: 18,
    },
    dateCircle: {
      width:45,
      height:50,
      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default HomeScreen;