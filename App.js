import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// import {v4 as uuidv4} from 'uuid';
import uuid from 'uuid-random';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Water',
    },
    {
      id: uuid(),
      text: 'Cheese',
    },
    {
      id: uuid(),
      text: 'Juice',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'OK'}]);
    } else {
      setItems(prevItems => {
        const newItem = {
          id: uuid(),
          text: text,
        };
        return [newItem, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="shopping list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
