import React from 'react';
import { StyleSheet, Image, View} from 'react-native';

import colors from '../config/colors'
import AppText from './AppText'

function AppInfo() {
    return (
        <View style={styles.info}>
            <Image style={styles.image} source={require("../assets/Materials/mosh.jpg")}/>
            <View style={styles.textContainer}>
                <AppText style={styles.name}>Mosh</AppText>
                <AppText style={styles.email}>programmingwithmosh@gmail.com</AppText>
            </View>
        </View>
    );
}

export default AppInfo;


const styles = StyleSheet.create({
    info: {
        width: "100%",
        height: 100,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    textContainer: {
        padding: 10,
    },
    name: {
        fontWeight: "600"
    },
    email: {
        color: colors.silver,
        fontSize: 16
    },
})