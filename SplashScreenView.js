import { Image, StyleSheet, View } from "react-native";
import screen from "./assets/screen.jpg"

export default function SplashScreen(){
    return(
        <View style = {styles.container}>
            <View>
                <Image source={screen} style = {styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
    }
});