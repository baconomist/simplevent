import React from "react";
import {ActivityIndicator, Button, StyleSheet, View} from "react-native";
import UserList from "./user-list";

class Home extends React.Component<any, any>
{
    state = {
        users: [],
        loading: true
    };

    private _isMounted: boolean = false;

    constructor(props: any)
    {
        super(props);
    }

    componentDidMount()
    {
        this._isMounted = true;
        this.getUsers();
    }

    componentWillUnmount(): void
    {
        this._isMounted = false;
    }

    getUsers()
    {
        fetch("https://randomuser.me/api/?results=20").then(
            (res: any) =>
            {
                if (res.ok)
                    return res.json();
                else
                    throw new Error("Something went wrong!")
            })
            .then((result: any) =>
            {
                if (this._isMounted)
                    this.setState({users: result.results, loading: false});
            }).catch((error: any) =>
        {
            throw new Error(error);
        });
    }

    render()
    {
        let tempUsers: any[] = [];
        for (let i = 0; i < this.state.users.length; i++)
        {
            tempUsers[i] = Object.assign({}, this.state.users[i], {"key": i.toString()});
        }

        let result: any = <ActivityIndicator
            style={[styles.centering]}
            color="#ff8179"
            size="large"
        />;

        if (!this.state.loading)
            result = <UserList users={tempUsers}/>;

        return (
            <View>
                <Button title={"Refresh"} onPress={ev =>
                {
                    this.getUsers();
                    this.state.loading = true;
                }}></Button>
                {result}
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5f80de"
    },
    centering: {
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    }
});

export default Home;