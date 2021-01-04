import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';

import ProfileScreen from './ProfileScreen';
import Repository from './Repository';


import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RepoStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#262626',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#262626',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#262626',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="RepoStack"
      component={RepoStackScreen}
      options={{
        tabBarLabel: 'Repo',
        tabBarColor: '#262626',
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
      {/* <Tab.Screen
      name="MonitoringStack"
      component={MonitorStackScreen}
      options={{
        tabBarLabel: 'Monitorging',
        tabBarColor: '#262626',
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        })}
      />
    </HomeStack.Navigator>
  );
};


const NotificationStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <NotificationStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notification',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
         
        }}
      />
       <NotificationStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
        })}
      />
      <NotificationStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        })}
      />
    
    </NotificationStack.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'User Profile',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
  const RepoStackScreen = ({navigation}) => {
    const {colors} = useTheme();
  
    return (
      <RepoStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
        }}>
        <RepoStack.Screen
          name="Repo"
          component={Repository}
          options={{
            title: 'Repository',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <Icon.Button
                  name="ios-menu"
                  size={25}
                  backgroundColor={colors.background}
                  color={colors.text}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <Icon.Button
                  name="ios-search"
                  size={25}
                  color={colors.text}
                  backgroundColor={colors.background}
                  onPress={() => {}}
                />
                <TouchableOpacity
                  style={{paddingHorizontal: 10, marginTop: 5}}
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}>
                  <Avatar.Image
                    source={{
                      uri:
                        'https://api.adorable.io/avatars/80/abott@adorable.png',
                    }}
                    size={30}
                  />
                  <RepoStack.Screen 
                  name="CardListScreen"
                  component={CardListScreen}
                  options={({route}) => ({
                    title: route.params.title,
                    headerBackTitleVisible: false
                  })}
                />
                <RepoStack.Screen 
                  name="CardItemDetails"
                  component={CardItemDetails}
                  options={({route}) => ({
                    // title: route.params.title,
                    headerBackTitleVisible: false,
                    headerTitle: false,
                    headerTransparent: true,
                    headerTintColor: '#fff'
                  })}
                />
                </TouchableOpacity>
              </View>
            ),
          
          }}
        />
       
      </RepoStack.Navigator>
    );

  };
  // const MonitorStackScreen = ({navigation}) => {
  //   const {colors} = useTheme();
  
  //   return (
  //     <MonitoringStack.Navigator
  //       screenOptions={{
  //         headerStyle: {
  //           backgroundColor: colors.background,
  //           shadowColor: colors.background, // iOS
  //           elevation: 0, // Android
  //         },
  //         headerTintColor: colors.text,
  //       }}>
  //       <MonitoringStack.Screen
  //         name="Repo"
  //         component={MonitoringTools}
  //         options={{
  //           title: '',
  //           headerLeft: () => (
  //             <View style={{marginLeft: 10}}>
  //               <Icon.Button
  //                 name="ios-menu"
  //                 size={25}
  //                 backgroundColor={colors.background}
  //                 color={colors.text}
  //                 onPress={() => navigation.openDrawer()}
  //               />
  //             </View>
  //           ),
          
  //         }}
  //       />
       
  //     </MonitoringStack.Navigator>
  //   );
  // };
