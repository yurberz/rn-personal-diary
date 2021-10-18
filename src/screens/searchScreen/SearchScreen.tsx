import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {
  SearchStackParamList,
  SearchStackProps,
} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import DefaultSearchScreen from './nestedScreens/defaultSearchScreen/DefaultSearchScreen';

const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchScreen = ({navigation: {dispatch}}: SearchStackProps) => {
  return (
    <SearchStack.Navigator
      initialRouteName="DefaultSearchScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingStart: 10,
        },
        headerRightContainerStyle: {
          paddingEnd: 10,
        },
      }}>
      <SearchStack.Screen
        name="DefaultSearchScreen"
        component={DefaultSearchScreen}
        options={{
          title: 'Search entry',
          headerLeft: () => (
            <IconButton
              onPress={() => dispatch(DrawerActions.openDrawer())}
              iconName="ios-menu-outline"
              iconSize={30}
              iconColor="rgb(0,122,255)"
            />
          ),
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchScreen;
