import { NavigationContainer } from '@react-navigation/native';
import PlayerList from './src/components/PlayerList/PlayerList';
import NewMatch from './src/components/NewMatch/NewMatch';
import Home from './src/components/Home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="NewMatch" component={NewMatch} />
      <Drawer.Screen name="PlayerList" component={PlayerList} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}