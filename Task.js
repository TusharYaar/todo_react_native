import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from "react-native";
const Task = ({id,title,toggleDone,isDone}) => {

    return (
<TouchableOpacity onPress={() => {toggleDone(id)}}>
<View style={styles.task,isDone&& styles.done}>
            <Text>{title}</Text>
        </View>
</TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    task: {
        paddingVertical: 3,
        paddingHorizontal: 6,
        backgroundColor: "#34E2A1"
    },
    done: {
        backgroundColor: "grey"
    }
})
export default Task;