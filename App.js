import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  NativeModules,
} from "react-native";
import { useDeviceContext } from "twrnc";
import tw from "./src/lib/tailwind";
import {
  IntroScreen1,
  IntroScreen2,
  IntroScreen3,
} from "./src/components/Intro/Intro";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/components/Intro/Welcome";

const { StatusBarManager } = NativeModules;

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <SafeAreaView> */}
        <Stack.Navigator
          initialRouteName='Intro1'
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='Intro1' component={IntroScreen1} />
          <Stack.Screen name='Intro2' component={IntroScreen2} />
          <Stack.Screen name='Intro3' component={IntroScreen3} />
          <Stack.Screen name='Welcome' component={Welcome} />
        </Stack.Navigator>
        <StatusBar translucent={false} backgroundColor='#fff' />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
