import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Route from "./src/routes/route";
import { ThemeProvider } from './src/context/theme';
import SplashScreen from './SplashScreenView';


export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });
  
  return (
    <NavigationContainer>
      <ThemeProvider>
        {isShowSplash ? (
          <SplashScreen />
        ) : (
          <>
      
        <Route />
        <StatusBar style="auto" />
        </>
        )}
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
