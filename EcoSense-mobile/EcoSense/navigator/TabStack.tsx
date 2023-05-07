import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "../screens/home";
import settings from "../screens/settings";
import NotificationsScreen from "../screens/notifications/NotificationsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const TabStack = ()=> {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Homescreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Settings" component={settings} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}
export default TabStack