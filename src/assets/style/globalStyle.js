import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
    container:
    {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'top',
    },
    textCenter:
    {
        textAlign: 'center'
    },
    textLeading:
    {
        textAlign: 'left',
    },
    textTailing: 
    {
        textAlign: 'right',
    },
    Sizes:
    {
        xxs: 8,
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 28,
    },
    imageStyle:
    {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 16,
    },
    animationTransition:{type: 'timing', duration: 200},
    themes:
    {
        dark:
        {
            colors:
            {
                backgroundColorPrimary: '#202047',
                backgroundColorSecondary: '#17173c',
                textColorPrimary: '#ffffff',
                textColorSecondary: '#d1d1d1',
                headerBackgroundColor: '#17173c',
                headerTintColor: '#fbfbfb',
            },
            shadow:
            {
                shadowColor: "#08081d",
                shadowOffset: 
                {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.12,
                shadowRadius: 4,
                elevation: 10,
            }
        },
        light:
        {
            colors:
            {
                backgroundColorPrimary: '#f7f7f7',
                backgroundColorSecondary: '#efefef',
                textColorPrimary: '#d60037',
                textColorSecondary: '#000000',
                headerBackgroundColor: '#fbfbfb',
                headerTintColor: '#d60037',
            },
            shadow:
            {
                shadowColor: "#000",
                shadowOffset: 
                {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.12,
                shadowRadius: 4,
                elevation: 10,
            }
        }
    }
});

export default globalStyle;