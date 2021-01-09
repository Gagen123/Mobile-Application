import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';


import Fontisto from 'react-native-vector-icons/Fontisto';



const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/slider4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/slider3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/slider2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
        
      </View>

      <View style={styles.cardsWrapper}>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
      <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Literacy')
      }>
          <View style={styles.categoryIcon}>
            <Fontisto name="home" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Literacy Rate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Attendence')
      }>
          <View style={styles.categoryIcon}>
          <Fontisto name="home" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Attendance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('MonitoringTools')
      }>
          <View style={styles.categoryIcon}>
            <Fontisto name="home" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Monitoring</Text>
        </TouchableOpacity>
      </View>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Overview
        </Text>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MonitoringTools')}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/slider2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Total NFE Centers in Bhutan</Text>
           
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
            
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.8}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/slider4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Total NFE Instructors in Bhutan</Text>
           
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.8}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/slider2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Total NFE Learner in Bhutan</Text>
           
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        
      </View>
     
      
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
