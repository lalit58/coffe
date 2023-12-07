import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ServiceStack from "./stack/ServiceStack";
import HomeTab from "./stack/HomeTab";
import Icon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const option = {
    headerShown: false,
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarIcon: ({ focused, color, size }) => {
          console.log("Route name:", route.name);
          let iconName;
          switch (route.name) {
            case "HomeStack":
              iconName = focused ? "home" : "home";
              return (
                <Icon
                  name={iconName}
                  size={25}
                  color={focused ? "red" : "grey"}
                />
              );
            case "ServiceStack":
              iconName = focused ? "user" : "user";
              return (
                <Icon
                  name={iconName}
                  size={28}
                  color={focused ? "red" : "grey"}
                />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeTab}
        options={{ ...option }}
      />
      <Tab.Screen
        name="ServiceStack"
        component={ServiceStack}
        options={{ ...option }}
      />
    </Tab.Navigator>
  );
}
