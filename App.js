import { useState } from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  
  const handleSaveTask = () =>{
    if(!taskText.trim()) return;
    if(isEditing){
      setTasks(tasks.map((task) => (task.id  === isEditing ? { ...task, text: taskText} : task) ));
    } else{
      const newTask = { id: Date.now().toString(), text: taskText }
      setTasks([...tasks,newTask]);
    }
    setTaskText("");
    setIsEditing(null);
  };
  const handleDelete = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id)); //指定されたid以外を残す
  };
  const handleEdit = (item) =>{
    setTaskText(item.text);
    setIsEditing(item.id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoアプリ</Text>
      <TaskInput 
        taskText = {taskText}
        setTaskText = {setTaskText}
        handleSaveTask= { handleSaveTask}
        isEditing= {isEditing}
      />
      <FlatList 
        data={tasks} 
        renderItem={({item}) => (
          <TaskItem
            item = {item}
            handleEdit = {handleEdit}
            handleDelete = {handleDelete}
          />
        )}
        // keyExtractorは、リスト内の各アイテムに対して一意のキーを提供するために使用されます。
        // ここでは、各タスクのidを一意のキーとして使用しています。
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // コンテナを画面全体に広げる
    padding: 40, // 内側の余白を設定
  },
  title: {
    fontSize: 24, // フォントサイズ
    fontWeight: "bold", // フォントの太さを太字に設定
    marginBottom: 20, // 下の余白
  },
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
  // task:{
  //   flexDirection: "row", // 横並びに設定
  //   justifyContent: "space-between", // 両端に寄せる
  //   alignItems: "center", // 中央揃え（縦方向）
  //   marginBottom: 20,// 下の余白
  //   padding: 10, // 内側の余白
  //   backgroundColor: "#eeeeee",
  //   borderRadius: 5, // 角の丸み

  // },
  // taskText:{
  //   maxWidth:"80%",
  // },
  // buttonContainer:{
  //   flexDirection: "row",

  // },

});
