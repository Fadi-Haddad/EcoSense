import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "../screens/home";
import settings from "../screens/settings";
import NotificationsScreen from "../screens/notifications/NotificationsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabStack = ()=> {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="notifications" color={color} size={size} />),}}/>
        <Tab.Screen name="Settings" component={settings} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />),}}/>
      </Tab.Navigator>
        </NavigationContainer>
    );
}
export default TabStack