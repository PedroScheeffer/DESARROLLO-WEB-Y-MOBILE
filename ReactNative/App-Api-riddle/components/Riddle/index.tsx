import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
    text: string;

}

const Riddle: React.FC<Props> = (props) => {
    const [y, setY] = React.useState(0);
    React.useEffect(() => {
        const animation = setInterval(() => {
            setY(prev => prev === 0 ? 20 : 0);
        }, 500);
        return () => clearInterval(animation);
    }, []);
    return <Text 
    style={[{ transform: `translateY(${y}px)` }, styles.riddle_style]}>{props.text}</Text>;
};

const styles = StyleSheet.create({
    riddle_style: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginBottom: 16,
    }
})

export default Riddle;
