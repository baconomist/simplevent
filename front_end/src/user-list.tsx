import React from "react";
import UserItem from "./user-item";
import {FlatList} from "react-native";

function UserList(props: any) {
    return (
        <FlatList
            scrollEnabled={true}
            data={props.users}
            renderItem={UserItem}
        />
    );
}


export default UserList;