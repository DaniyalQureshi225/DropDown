import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Details from '../screens/Details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

export default MyTabs;
