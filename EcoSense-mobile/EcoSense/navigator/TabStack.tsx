import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../screens/Home";
import Settings from "../screens/Settings";
import AQIhistory from "../screens/AQI-history";
import COhistory from "../screens/CO-history";
import CO2history from "../screens/CO2-history";
import Temphistory from "../screens/Temp-history";
import Humidityhistory from "../screens/Humidity-history";
import NotificationsScreen from "../screens/Notifications/NotificationsScreen";
import LoginScreen from "../screens/Login";

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
      <Stack.Screen name="AQIhistory" component={AQIhistory} options={{ headerShown: false }}/>
      <Stack.Screen name="COhistory" component={COhistory} options={{ headerShown: false }}/>
      <Stack.Screen name="CO2history" component={CO2history} options={{ headerShown: false }}/>
      <Stack.Screen name="Temphistory" component={Temphistory} options={{ headerShown: false }}/>
      <Stack.Screen name="Humidityhistory" component={Humidityhistory} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
// function SettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
//       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
//     </Stack.Navigator>
//   );
// }



const TabStack = ()=> {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="notifications" color={color} size={size} />),}}/>
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />),}}/>
        {/* <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />),}}/> */}
      </Tab.Navigator>
        </NavigationContainer>
    );
}
export default TabStack