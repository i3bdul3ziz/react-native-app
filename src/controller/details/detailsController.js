import { Image, ScrollView} from "react-native";
import { useSelector } from 'react-redux';
import { Motion } from "@legendapp/motion"

import globalStyle from "../../assets/style/globalStyle";

const DetailsController = ({ route }) =>
{
    const theme = useSelector((store) => store?.theme);
    const { item } = route.params;

    return (
      <Motion.View transition={globalStyle.animationTransition} animate={{backgroundColor: globalStyle.themes[theme].colors.backgroundColorPrimary}} style={{...globalStyle.container, paddingHorizontal: globalStyle.Sizes.sm}}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorPrimary}} style={[globalStyle.textLeft, {fontSize: globalStyle.Sizes.lg, paddingVertical: globalStyle.Sizes.sm}]}>{item.title}</Motion.Text>
            <Image src={`${item?.img_url}?lock=${item.id}`} style={globalStyle.imageStyle}/>
            <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorPrimary}} style={[globalStyle.textLeft, {fontSize: globalStyle.Sizes.lg, paddingVertical: globalStyle.Sizes.sm}]}>Ingredients</Motion.Text>
            <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorSecondary}} style={[globalStyle.textLeft, {fontSize: globalStyle.Sizes.sm, paddingBottom: globalStyle.Sizes.sm}]}>{item.ingredients}</Motion.Text>
            <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorPrimary}} style={[globalStyle.textLeft, {fontSize: globalStyle.Sizes.lg, paddingVertical: globalStyle.Sizes.sm}]}>Description</Motion.Text>
            <Motion.Text transition={globalStyle.animationTransition} animate={{color: globalStyle.themes[theme].colors.textColorSecondary}} style={[globalStyle.textLeft, {fontSize: globalStyle.Sizes.sm, paddingBottom: 100}]}>{item.description_long}</Motion.Text>
        </ScrollView>
      </Motion.View>
    );
}

export default DetailsController;