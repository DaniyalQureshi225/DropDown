import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import DropDown from '../components/DropDown';

export default function Home({navigation}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = item => {
    setSelectedItem(item);
  };
  const fruits = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Banana'},
    {id: 3, name: 'Orange'},
  ];
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 20}}>Home</Text>

      <Button
        title="Contact"
        onPress={() => navigation.navigate('Contact')}></Button>

      <DropDown value={selectedItem} data={fruits} onSelect={onSelect} />
    </View>
  );
}
