import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import Task from "./Task";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [allTask, setAllTask] = useState([]);
  const newTaskHandler = (text) => {
    setNewTask(text);
  };
  const addNewTaskHandler = () => {
    setAllTask((currentTask) => [
      ...currentTask,
      {
        key: `${uuidv4()}`,
        task: newTask,
        done: false,
      },
    ]);
    setNewTask("");
  };
  const toggleDone = (key) => {
    setAllTask((currentTask) =>
      currentTask.map((task) => {
        if (task.key === key) task.done = !task.done;
        return task
      }
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={allTask}
        renderItem={({ item }) => (
          <Task title={item.task} id={item.key} toggleDone={toggleDone} isDone={item.done}/>
        )}
      ></FlatList>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a task"
          style={styles.inputField}
          onChangeText={newTaskHandler}
          value={newTask}
        />
        <Button
          title="Add task"
          style={styles.addButton}
          onPress={addNewTaskHandler}
          color="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213d",
    paddingVertical: 40,
    paddingHorizontal: 10,
    flexDirection: "column",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  inputField: {
    flex: 1,
    marginRight: 40,
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20
  },
  addButton: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
    fontSize: 20
  },
});
