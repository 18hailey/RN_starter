import { useState, React } from "react";
import { Text, View } from "react-native";
import MyButton from "./MyButton";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    const handleMinus = () => {
        setCount(count-1);
        setDouble(double-2);
    }

    const handlePlus = () => {
        setCount(count+1);
        setDouble(double+2);
    }
    return (
        <View style={{ alignItems: 'center'}}>
            <Text style={{ fontSize: 30, margin: 0}}>count: {count}</Text>
            <Text style={{ fontSize: 30, margin: 10 }}>double: {double}</Text>
            <MyButton title="+" onPress={handlePlus} />
            <MyButton title="-" onPress={handleMinus} />
        </View>
    );
};

export default Counter;

