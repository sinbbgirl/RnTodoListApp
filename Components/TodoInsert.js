/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const TodoInsert = ({ onAddTodo }) => {
    const [newTodoItem, setNewTodoItem] = useState('');

    const handleTodoInput = newTodo => {
        setNewTodoItem(newTodo);
    }

    const handleAddTodo = () => {
        if (newTodoItem !== '') {
            console.log(`newTodoItem: ${newTodoItem}`)
            onAddTodo(newTodoItem);
        } else {
            Alert.alert('알림','내용을 입력하세요')
            return;
        }
        setNewTodoItem('');
    }
    
    // 구글키보드에서는 엔터키누르면 되는데 네이버키보드는 안돼
    const handleKeyPress = e => {
        console.log('nativeKeyPress',e.nativeEvent.key)
        if (e.nativeEvent.key === 'Enter'){
            handleAddTodo();
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Make Your Plan"
                placeholderTextColor="#afafaf"
                value={newTodoItem}
                onChangeText={handleTodoInput} 
                onKeyPress={handleKeyPress}/>
            <View style={styles.button}>
                <Button
                    title="추가"
                    color="#a6a6a4"
                    onPress={handleAddTodo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginRight: 14,
        marginTop: 10,
        width: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70%',
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#a6a6a4',
    },
});
export default TodoInsert;