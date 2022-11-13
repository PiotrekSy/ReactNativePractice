import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Button, Image, } from 'react-native';
import { styles } from './styles'
import { ItemComponent } from './components/ItemComponent/ItemComponent'
import { InputComponent } from './components/InputComponent/InputComponent'

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [list, setList] = useState([]);

  const addGoalHandle = (enteredGoalValue) => {
    setList(currentList => [
      ...currentList,
      { id: Math.random().toString(), value: enteredGoalValue }
    ])
  }

  const showModalToAddTask = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const deleteHandle = (id) => {
    setList(currentList => {
      return currentList.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <StatusBar style={"auto"} />
      <View style={styles.container}>
        <View style={styles.addButton}>
          <Button title='Add new Task' color={'#b66b08'} onPress={showModalToAddTask} />
        </View>
        <InputComponent
          onAddGoal={addGoalHandle}
          isVisible={modalVisible}
          onClose={closeModal}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={
              (itemObject) => {
                return (
                  <ItemComponent
                    text={itemObject.item.value}
                    onDeleteItem={deleteHandle}
                    id={itemObject.item.id}
                  />
                )
              }
            }
            keyExtractor={
              (item, index) => { return item.id }}
          />
        </View>
      </View>
    </>

  );
}