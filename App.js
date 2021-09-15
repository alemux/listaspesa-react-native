import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default App => {
  let [fontsLoaded] = useFonts({  
    'glory': require('./assets/fonts/Glory-Regular.ttf'),
    'glory-bold': require('./assets/fonts/Glory-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'glory-bold', fontSize: 40 }}>Inter Black</Text>
        <Text style={{ fontSize: 14 }}>Platform Default</Text>
      </View>
    );
  }
};