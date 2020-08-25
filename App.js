// In App.js in a new project

import * as React from 'react';
import {Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListCategory from './screen/ListCategory';
import DauGoi from './screen/DauGoi';
import SuaTam from './screen/SuaTam';
import EditDanhBa from './screen/EditDanhBa';
import AddDanhBa from './screen/AddDanhBa';
import ListCrud from './screen/ListCrud';
import UserPro from './screen/UserPro';
import DanhBa from './screen/DanhBa';
import Header from './screen/Header';
import ListTinTuc from './screen/ListTinTuc';
import ChiTietTinTuc from './screen/ChiTietTinTuc';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Avatar, Accessory } from 'react-native-elements';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();
const DanhBaStack = createStackNavigator();
const Tabs = createBottomTabNavigator();


const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={ListCategory} 
      //  options={{title : "Home"}}
      options={{headerTitle : () => <Header/>}}

         />
      <HomeStack.Screen name="Đơn thuốc" component={DauGoi}  options={{title : "Đơn thuốc"}} />
      <HomeStack.Screen name="Xin nghỉ học" component={SuaTam}  options={{title : "Xin nghỉ"}}  />
      <HomeStack.Screen name="ListTinTuc" component={ListTinTuc}  options={{title : "Danh sách tin tức"}}  />
      <HomeStack.Screen name="ChiTietTinTuc" component={ChiTietTinTuc}  options={{title : "Chi tiết tin tức"}}  />
  </HomeStack.Navigator>
)

const AccountScreen = () => (
  <AccountStack.Navigator initialRouteName="ListCrud">
     <AccountStack.Screen name="ListCrud" component={ListCrud}  options={{title : "Crud danh ba"}} />
     <AccountStack.Screen name="AddDanhBa" component={AddDanhBa}  options={{title : "Thêm danh bạ"}} />
     <AccountStack.Screen name="EditDanhBa" component={EditDanhBa}  options={{title : "Chi tiết"}} />
  </AccountStack.Navigator>
)

const DanhBaScreen = () => (
  <DanhBaStack.Navigator>
     <DanhBaStack.Screen name="DanhBa" component={DanhBa}  options={{title : "Danh Bạ"}} />
     <DanhBaStack.Screen name="UserPro" component={UserPro}  options={{title : "Thông Tin Bé"}} />
  </DanhBaStack.Navigator>
)

function App() {
  return (

    <NavigationContainer>
     <Tabs.Navigator initialRouteName="Kids"  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;
            if (route.name === 'Kids') {
              iconName = 'home';
              // iconColor = focused ? 'blue' : 'gray';
            } else if (route.name === 'Crud') {
              iconName ='perm-contact-calendar';
              // iconColor = focused ? 'blue' : 'gray';
            }else if (route.name === 'Thông báo') {
              iconName ='volume-down';
            }
            else if (route.name === 'DanhBa') {
              iconName ='camera-front';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >

            <Tabs.Screen name="Kids" component={HomeStackScreen}   options={{title : "Home"}}  />
            <Tabs.Screen name="Crud" component={AccountScreen}  />
            <Tabs.Screen name="DanhBa" component={DanhBaScreen}   options={{title : "Danh bạ"}} />
            <Tabs.Screen name="Thông báo" component={HomeStackScreen}   options={{title : "Thông báo"}}  options={{ tabBarBadge: 3 }}  />

    </Tabs.Navigator> 
      {/* <Stack.Navigator initialRouteName="Kids">
        <Stack.Screen name="Kids" component={ListCategory}  />
        <Stack.Screen name="Đơn thuốc" component={DauGoi}  options={{title : "Đơn thuốc"}} />
        <Stack.Screen name="Xin nghỉ học" component={SuaTam}  options={{title : "Xin nghỉ"}}  />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;