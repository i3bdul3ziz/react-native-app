import 'react-native-gesture-handler';
import { AppRegistry, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import {name as appName} from './app.json';
import { store } from './src/helper/store';
import { firstClickedItemAction } from './src/helper/action';


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

    const initItem = useSelector((store) => store?.item);

    const clickedItem = useSelector((store) => store?.clickedItem);

    const handleFirstClickedItem = () =>
    {
        const firstClickedItem = 
        {
            name: 'Mohammed',
            date: 'Today'
        }

        dispatch(firstClickedItemAction(firstClickedItem));
    };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.op} onPress={handleFirstClickedItem}>
            <Text>{clickedItem?.name ? clickedItem?.name : initItem?.name}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    op:
    {
        flex: 1,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent(appName, () => AppWrapper);