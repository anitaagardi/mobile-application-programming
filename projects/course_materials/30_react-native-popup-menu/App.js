import React from 'react';
import { View, Text } from 'react-native';
// your entry point
import { MenuProvider } from 'react-native-popup-menu';

export default () => (
  <MenuProvider>
    <Home />
  </MenuProvider>
);

// somewhere in your app
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

function Home(){return (
  <View>
    <Text>Hello world!</Text>
    <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
  </View>
);
}