import { Input } from "@/components/input";
import ListItem from "@/components/listItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, View } from "react-native";

const saveTodos = async (todos: any) => {
  await AsyncStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = async () => {
  const json = await AsyncStorage.getItem("todos");
  return json != null ? JSON.parse(json) : [];
};

export default function Index() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  return (
    <View className="flex-col gap-4 mt-8 w-[80%] mx-auto">
      <View className="flex-row gap-2">
        <Input style={{ flex: 1 }} value={value} setValue={setValue} />
        <View style={{ width: 100 }}>
          <Button
            title="Add"
            onPress={() => {
              setTodos([...todos, { name: value, check: false }]);
              saveTodos([...todos, { name: value, check: false }]);
              setValue("");
            }}
          />
        </View>
      </View>
      {todos.map((todo, index) => (
        <ListItem
          setDelete={() => {
            saveTodos(todos.filter((_, i) => i !== index));
            setTodos(todos.filter((_, i) => i !== index));
          }}
          key={todo.name + index}
          name={todo.name}
          check={todo.check}
          setChange={() => {
            todo.check = !todo.check;
            saveTodos(todos);
          }}
        />
      ))}
    </View>
  );
}
