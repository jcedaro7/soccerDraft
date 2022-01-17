import { NavigationContainer } from '@react-navigation/native';
import PlayerList from './src/components/PlayerList/PlayerList';
import NewMatch from './src/components/NewMatch/NewMatch';
import Home from './src/components/Home/Home';
import PlayerSelection from './src/components/PlayerSelection/PlayerSelection';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PlayerForm from './src/components/PlayerForm/PlayerForm';

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
          borderBottomColor: '#000000',
          height:120
        },
        headerTitleStyle: {
          fontSize: 29
        },
        headerTintColor: '#7FF2D0',
        drawerActiveTintColor: '#7FF2D0',
        drawerInactiveTintColor: '#7FF2D0',
        drawerLabelStyle: {
          fontSize: 20
        }
    }}
    >
      <Drawer.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Soccer Draft'
        }}
      />
      <Drawer.Screen
        name='NewMatch'
        component={NewMatch}
        options={{
          title: 'New Match',
        }}
      />
      <Drawer.Screen
        name='PlayerList'
        component={PlayerList}
        options={{
          title: 'Player List',
        }}
      />
      <Drawer.Screen
        name='PlayerSelection'
        component={PlayerSelection}
        options={{
          title: 'Player Selection',
          drawerItemStyle: { display: 'none' }
        }}
      />
      <Drawer.Screen
        name='PlayerForm'
        component={PlayerForm}
        options={{
          title: 'Player',
          drawerItemStyle: { display: 'none' }
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