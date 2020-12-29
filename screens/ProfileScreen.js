import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Text,
  TouchableRipple,
} from 'react-native-paper';



const ProfileScreen = () => {

  

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={60}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>User Profile</Title>
          
          </View>
        </View>
      </View>

      

     

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Name:</Text>
            <Text style={styles.menuItemText}>Gagendra Ghalley</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Date of Birth:</Text>
          <Text style={styles.menuItemText}>10-12-2020</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Contact Number:</Text>
          <Text style={styles.menuItemText}>7777777</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>CID Number:</Text>
          <Text style={styles.menuItemText}>113050033444</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Email Address:</Text>
          <Text style={styles.menuItemText}>Example@gmail.com</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Dzongkhag:</Text>
          <Text style={styles.menuItemText}>Sarpang</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Gewog:</Text>
          <Text style={styles.menuItemText}>Dekiling</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Village:</Text>
          <Text style={styles.menuItemText}>Perligang</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Center Name:</Text>
          <Text style={styles.menuItemText}>Pemaling</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Parent School:</Text>
          <Text style={styles.menuItemText}>Sarpang HSS</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Course Name:</Text>
          <Text style={styles.menuItemText}>ALC</Text>
          </View>
        </TouchableRipple>
        
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    fontWeight:'bold',
  },
});
