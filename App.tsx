import { NavigationContainer } from '@react-navigation/native';
import PlayerList from './src/components/PlayerList/PlayerList';
import NewMatch from './src/components/NewMatch/NewMatch';
import Home from './src/components/Home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#111111',
        },
        headerStyle: {
          backgroundColor: '#000000',
          borderBottomColor: '#000000'
        },
        headerTintColor: '#7FF2D0',
        drawerActiveTintColor: '#7FF2D0',
        drawerInactiveTintColor: '#7FF2D0'
    }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="NewMatch"
        component={NewMatch}
        options={{
          title: 'New Match',
        }}
      />
      <Drawer.Screen
        name="PlayerList"
        component={PlayerList}
        options={{
          title: 'Player List',
        }}
      />
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