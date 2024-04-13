import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const TaskInput = ({taskText,setTaskText,handleSaveTask,isEditing}) => {
  return (
    <View>
      <TextInput
          placeholder="タスクを入力"
          style={styles.input}
          onChangeText={setTaskText}
          value={taskText}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
          <Text style={styles.saveButtonText} >{isEditing ? "編集" : "追加"}</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1, // 枠線の太さ
    borderColor: "#ccceee", // 枠線の色
    padding: 10, // 内側の余白
    marginBottom: 10, // 下の余白
    borderRadius: 6, // 角の丸み
  },
  saveButton:{
    backgroundColor: "green", // 背景色を緑に設定
    padding: 10, // 内側の余白
    borderRadius: 5, // 角の丸み
    marginBottom: 20, // 下の余白
  },
  saveButtonText: {
    color: "#fff", // 文字色を白に設定
    textAlign: "center", // 中央揃え
  },
});

export default TaskInput