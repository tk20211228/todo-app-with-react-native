import React from 'react'
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const TaskItem = React.memo(({item,handleEdit,handleDelete}) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Icon
            name="edit" 
            color= "#4caf50" 
            onPress={()=> handleEdit(item)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleDelete(item.id)}>
          <Icon name="delete" color= "#f44336"/>
        </TouchableOpacity>
      </View>
    </View> 
  )
});

const styles = StyleSheet.create({
  task:{
    flexDirection: "row", // 横並びに設定
    justifyContent: "space-between", // 両端に寄せる
    alignItems: "center", // 中央揃え（縦方向）
    marginBottom: 20,// 下の余白
    padding: 10, // 内側の余白
    backgroundColor: "#eeeeee", // 背景色を設定
    borderRadius: 5, // 角の丸み
  },
  taskText:{
    maxWidth:"80%", // 最大幅を80%に設定
  },
  buttonContainer:{
    flexDirection: "row",// 横並びに設定
  },
});

export default TaskItem