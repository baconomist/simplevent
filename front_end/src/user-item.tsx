import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

function UserItem(user: any)
{
    user = user.item;
    return (
        <View style={styles.row}>
            <Image style={styles.rowIcon} source={{uri: user.picture.medium}}/>
            <View style={styles.rowData}>
                <Text style={styles.rowDataText}>
                    {user.name.title}
                    {user.name.first}
                    {user.name.last}
                </Text>
                <Text style={styles.rowDataSubText}>{user.email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginBottom: 5,
        backgroundColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.1)"
    },
    rowIcon: {
        width: 64,
        height: 64,
        marginRight: 20,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    rowData: {
        flex: 1
    },
    rowDataText: {
        fontSize: 15,
        textTransform: "capitalize",
        color: "#4b4b4b"
    },
    rowDataSubText: {
        fontSize: 13,
        opacity: 0.8,
        color: "#a8a689",
        marginTop: 4
    }
});

export default UserItem;