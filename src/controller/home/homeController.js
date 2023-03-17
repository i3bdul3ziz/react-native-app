import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet, SafeAreaView, RefreshControl} from "react-native";
import { Motion } from "@legendapp/motion";
import Card from '../../view/component/card/card';

import foodModel from "../../model/food";

import globalStyle from "../../assets/style/globalStyle";


const HomeController = ({ navigation }) =>
{
    const theme = useSelector((store) => store?.theme);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    function getAll()
    {
        setLoading(true);
        
        foodModel.getAll()
        .then(data =>
        {
            console.log(data)
            setList(data);
            setLoading(false);
        })
        .catch(err =>
        {
            setList([]);
            setLoading(false);
        })
    }

    useEffect(() =>
    {
        getAll();
    },[]);

    return (
        <Motion.View transition={globalStyle.animationTransition} animate={{backgroundColor: globalStyle.themes[theme].colors.backgroundColorPrimary}} style={{...style.container}}>
            <SafeAreaView style={{...style.container}}>
                {loading
                ?
                    <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorPrimary}}>loading...</Motion.Text>
                :
                    list?.length > 0 &&
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            data={list}
                            renderItem={({item}) => <Card navigation={navigation} item={item}/>}
                            keyExtractor={item => item.id}
                        />
                }
            </SafeAreaView>
        </Motion.View>
    )
}

const style = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeController;