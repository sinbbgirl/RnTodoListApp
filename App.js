/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet, View } from 'react-native';
import TodoInsert from './Components/TodoInsert'
import TodoList from './Components/TodoList'

const App = () => {
  // todos: {id:1, textValue:'todoitem', checked:true/false}
  const [todos, setTodos] = useState([]);

  // 할일 목록 추가
  const addTodo = text => {
    setTodos([
      ...todos,
      { id: todos.length + 1, textValue: text, checked: false }
    ])
    console.log('App/ addTodo',todos)
    // Axios DB처리 / INSERT API 호출
  }

  const onRemove = id => {
    console.log(`'App / delete id => ${id}`)
    setTodos(todos.filter(todo => todo.id !== id))
    // Axios DB처리 / DELETE API 호출
  }

  const onToggle = id => {
    console.log(`'App / toggle id => ${id}`)
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo,checked:!todo.checked} : todo
      )
    )
    console.log('App/ onToggle',todos)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text children="TO DO LIST" style={styles.appTitle} />
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#625261',
  },
  appTitle: {
    color: '#e8e8e8',
    textAlign: 'center',
    fontSize: 35,
    margin: 10,
    fontFamily: 'DancingScript-Bold',
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#a6a6a4'
  }
})

export default App;
