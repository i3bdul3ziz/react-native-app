import {useEffect} from 'react';
import { Button, Image } from "react-native";
import { useSelector } from 'react-redux';
import { Motion } from "@legendapp/motion"


import globalStyle from "../../assets/style/globalStyle";

const DetailsController = ({ route, navigation }) =>
{
    const theme = useSelector((store) => store?.theme);
    const { item } = route.params;

    useEffect(() =>
    {
        console.log(item?.img_url)
    },[]);

    return (
      <Motion.View transition={globalStyle.animationTransition} animate={{backgroundColor: globalStyle.themes[theme].colors.backgroundColorPrimary}} style={{...globalStyle.container}}>
        <Image src={item?.img_url} style={globalStyle.imageStyle}/>
        <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorPrimary}}>Details Screen</Motion.Text>
        <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorSecondary}}>{theme}</Motion.Text>
        <Button color={globalStyle.themes[theme].colors.textColorPrimary} title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </Motion.View>
    );
}

export default DetailsController;