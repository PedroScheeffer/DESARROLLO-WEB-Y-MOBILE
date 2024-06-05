import React from "react";
import { Button, StyleSheet, View } from "react-native";

interface Props {
    text: string;
    color: string;
    onClickHandler: () => void;
}
const MyButton = ({ text, onClickHandler }: Props) => {

    return (
        <View
            style={styles.button}
        >
            <Button
                onPress={onClickHandler}
                title={text}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
    },
});

export default MyButton;