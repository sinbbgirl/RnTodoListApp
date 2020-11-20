/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/dist/AntDesign'
import OctIcon from 'react-native-vector-icons/dist/Octicons'

const TodoItem = ({ id, textValue, checked, onRemove, onToggle }) =>
    <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => onToggle(id)}>
            {checked ? (
                <View style={styles.checkedIcon}>
                    <AntIcon name="checkcircleo" size={30} color="#a6a6a4" />
                </View>
            ) : (
                <View style={styles.circle}>
                    {/* <AntIcon name="checkcircleo" size={30} color="#a6a6a4" /> */}
                </View>
            )}
        </TouchableOpacity>
        <Text
            children={textValue}
            style={[styles.text, checked ? styles.strikeText : styles.text]} />
        <TouchableOpacity onPress={() => onRemove(id)}>
            <View style={styles.trashCanIcon}>
                <OctIcon name="trashcan" size={30} color="#794c74" />
            </View>
        </TouchableOpacity>
    </View>

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderBottomColor: '#a6a6a4',
        borderBottomWidth: 0.6,
        width: '87%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#625261',
        flex: 1,
        fontSize: 14,
        marginVertical: 14,
    },
    circle: {
        width: 30,
        height: 30,
        borderColor:'#a6a6a4',
        borderRadius: 15,
        borderWidth: 2,
        marginRight: 10,
        marginLeft: 2,
    },
    checkedIcon: {
        marginRight: 10,
        marginLeft: 2,
    },
    trashCanIcon: {
        marginRight: 10,
        marginLeft: 10,
    },
    strikeText: {
        color: '#a6a6a4',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#30475e',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
})

export default TodoItem;