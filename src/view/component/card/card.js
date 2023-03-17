import { Button, Image, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { Motion } from "@legendapp/motion";

import globalStyle from "../../../assets/style/globalStyle";
import cardStyle from "./cardStyle";

const Card = ({ navigation, item }) =>
{
    const theme = useSelector((store) => store?.theme);

    return (
        <Motion.Pressable onPress={() => navigation.navigate('Details', {item: item})} style={cardStyle.container}>
            <Motion.View
                animate={{backgroundColor: globalStyle.themes[theme].colors.backgroundColorSecondary}}
                style={{...globalStyle.themes[theme].shadow, ...cardStyle.view}}
                whileTap={{ scale: 1.05}}
                transition={globalStyle.animationTransition}
            >
                <Image source={{uri: item?.img_url}} style={globalStyle.imageStyle}/>
                <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorPrimary}} style={[globalStyle.textLeft, {fontSize: globalStyle.Sizes.md, paddingVertical: globalStyle.Sizes.xxs}]}>{item.title}</Motion.Text>
                <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorSecondary}} style={[globalStyle.textLeft, {fontSize: globalStyle.Sizes.xs}]}>{item.discerption_short}</Motion.Text>
            </Motion.View>
        </Motion.Pressable>
    )
}

export default Card;