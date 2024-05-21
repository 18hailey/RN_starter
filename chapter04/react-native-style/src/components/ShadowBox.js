import { Platform, StyleSheet, View } from "react-native";

export default () => {
    return(
        <View style={styles.shadow}></View> // View가 상자 역할
    );
};

const styles = StyleSheet.create(
    {
        shadow: {
            backgroundColor: '#fff',
            width: 200, 
            height: 200,
            ...Platform.select({ // 리액트 네이티브에서 제공하는 Platform 모듈을 이용하여 각 플랫폼마다 다른 코드 적용하여 작성할 수 있다. 
                ios: { // 객체의 키가 ios, android, native, default 중 하나
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 10,
                        height: 10
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10
                },
                android: {
                    elevation: 10
                }
            })
        }
    }
);