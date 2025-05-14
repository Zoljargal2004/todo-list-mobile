import { StyleProp, TextInput, TextStyle } from "react-native"

export const Input = ({value, setValue, style = null}: {value: string, setValue: (value: string) => void, style: StyleProp<TextStyle> | null}) => {
  return (
    <TextInput 
      style={style} 
      placeholder="Enter your todo" 
      className="border-2 border-gray-300 rounded-md p-2" 
      value={value} 
      onChangeText={setValue}
    />
  )
}
