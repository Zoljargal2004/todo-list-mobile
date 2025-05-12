import AsyncStorage from '@react-native-async-storage/async-storage';
import { Switch, Text, View } from "react-native";

const saveTodos = async (todos) => {
  await AsyncStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodos = async () => {
  const json = await AsyncStorage.getItem('todos');
  return json != null ? JSON.parse(json) : [];
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-500">Edit app/index.tsx to edit this screen.</Text>
      <Switch/>
    </View>
  );
}
