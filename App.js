import 'react-native-gesture-handler';
import { AppRegistry, Image, TouchableOpacity} from 'react-native';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './src/helper/store';
import { themeAction } from './src/helper/action';

import HomeController from './src/controller/home/homeController';
import DetailsController from './src/controller/details/detailsController';

import globalStyle from './src/assets/style/globalStyle';

const Stack = createNativeStackNavigator();

export default function AppWrapper() 
{
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export function App() 
{
    const dispatch = useDispatch();

    const theme = useSelector((store) => store?.theme);

    const setTheme = () =>
    {
        dispatch(themeAction(theme === 'dark' ? 'light' : "dark"));
    };

  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={
                {
                    title: 'My home',
                    headerStyle:
                    {
                        backgroundColor: globalStyle.themes[theme].colors.headerBackgroundColor,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerTintColor: globalStyle.themes[theme].colors.headerTintColor,
                    headerTitleStyle: {fontWeight: 'bold'},
                    headerBackTitleVisible: false,
                    headerRight: () => (
                        <TouchableOpacity onPress={setTheme}>
                            <Image source={{uri: theme === 'light' ? 'https://img.icons8.com/office/100/null/new-moon.png' : 'https://img.icons8.com/officel/100/null/sun.png'}} style={{width: 25, height: 25}}/>
                        </TouchableOpacity>
                      ),
                }
            }>
                <Stack.Screen name="Home" component={HomeController} options={{title: 'Home'}}/>
                <Stack.Screen name="Details" component={DetailsController} options={{ title: 'Details'}}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => AppWrapper);