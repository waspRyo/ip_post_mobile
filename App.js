import React from 'react';
import Feed from './src/feed'
import Detail from './src/details';
// Screen
import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';
// Projects
import ProjectList from './src/screens/projects/ProjectList';
import ProjectDetail from './src/screens/projects/ProjectDetail';
import NormalReport from './src/screens/projects/NormalReport';
import StoriesReport from './src/screens/projects/StoriesReport';
// Tabs
import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';
// Vector Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';
// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

App = () => {
  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#4C5050',
      text: 'white',
      border: 'green',
    },
  }


  createHomeStack = () =>
    <Stack.Navigator>
      {/* <Stack.Screen
        name="EMEPOS"
        component={Feed}
        options={{
          title: 'EMEPOS',
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} /> */}
      <Stack.Screen
        name="projects"
        component={ProjectList}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="詳細"
        component={ProjectDetail}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="通常投稿レポート"
        component={NormalReport}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="ストーリーズ投稿レポート"
        component={StoriesReport}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }} />
      <Stack.Screen
        name="Bottom Tabs"
        children={createBottomTabs}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="Top Tabs"
        children={createTopTabs}
        options={{
          headerStyle: { backgroundColor: "#3DC0B1" },
          headerTintColor: "white"
        }}
      />
    </Stack.Navigator>

  createTopTabs = (props) => {
    return <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Tab 1"
        component={Tab1}
      />
      <MaterialTopTabs.Screen
        name="Tab 2"
        component={Tab2}
        options={{ title: props.route.params.name }}
      />
      <MaterialTopTabs.Screen
        name="Tab 3"
        component={Tab3}
      />
    </MaterialTopTabs.Navigator>
  }

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Tab 1"
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Tab 2"
        component={Tab2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
          )
        }}
      />
      <MaterialBottomTabs.Screen
        name="Tab 3"
        component={Tab3}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favorites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

}

export default App;