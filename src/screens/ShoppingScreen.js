import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function ShoppingScreen() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const textInputRef = useRef(null);

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const addItem = () => {
    if (!text.trim()) return;
    setItems(prev => [...prev, { id: Date.now().toString(), name: text.trim() }]);
    setText('');
  };

  const removeItem = id => setItems(prev => prev.filter(item => item.id !== id));

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => textInputRef.current.focus()}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, marginBottom: 12 }}>Alışveriş Listesi</Text>
        <View style={{ flexDirection: 'row', marginBottom: 12 }}>
          <TextInput
            ref={textInputRef}
            style={{ flex: 1, borderWidth: 1, padding: 8, borderRadius: 4 }}
            value={text}
            onChangeText={setText}
            placeholder="Yeni ürün ekle"
            onSubmitEditing={addItem}
          />
          <Button title="Ekle" onPress={addItem} />
        </View>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 }}>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Text style={{ color: 'red' }}>Sil</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}