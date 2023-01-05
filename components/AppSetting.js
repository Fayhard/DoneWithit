import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'

function AppSetting({icon, title, backColor, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={[styles.icon, {backgroundColor: backColor}]}>
                    <MaterialCommunityIcons name={icon} size={30} color="white"/>
                </View>
                <AppText style={styles.text}>{title}</AppText>
            </View>
        </TouchableOpacity>
    );
}

export default AppSetting;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    text: {
        textTransform: "capitalize",
        fontWeight: "500",
    }
})