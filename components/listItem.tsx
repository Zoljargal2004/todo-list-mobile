import { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";

export default function ListItem({
  name,
  check,
  setChange,
  setDelete,
}: {
  name: string;
  check: boolean;
  setChange: (checl: boolean) => void;
  setDelete: () => void;
}) {
  const [done, setDone] = useState(check);

  return (
    <View className={`flex-row w-full justify-between items-center mx-auto`}>
      <Text className={`text-2xl ${done ? "line-through" : ""}`}>{name}</Text>
      <View className="flex-row gap-2">
        <Switch
          value={done}
          onValueChange={() => {
            setDone(!done);
            setChange(done);
          }}
        />
        <Pressable
          onPress={setDelete}
          style={{
            backgroundColor: "#2196F3",
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}
