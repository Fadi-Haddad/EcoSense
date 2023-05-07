import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "../screens/Home";
import Settings from "../screens/Settings";
import NotificationsScreen from "../screens/Notifications/NotificationsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabStack = ()=> {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="notifications" color={color} size={size} />),}}/>
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />),}}/>
      </Tab.Navigator>
        </NavigationContainer>
    );
}
export default TabStack