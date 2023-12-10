import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ImagePath from '../constants/ImagePath';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').Height;

export default function DropDown({data = [], value = {}, onSelect = () => {}}) {
  const [showOptions, setShowOptions] = useState(false);
  console.log(value);
  const onSelectedItem = val => {
    setShowOptions(false);
    onSelect(val);
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.DropDown}
        activeOpacity={0.8}
        onPress={() => setShowOptions(!showOptions)}>
        <Text>{!!value ? value?.name : 'Select an option...'}</Text>
        <Image
          source={ImagePath.fb}
          resizeMode="contain"
          style={{
            height: 25,
            width: 25,
            transform: [{rotate: showOptions ? '90deg' : '0deg'}],
          }}
        />
      </TouchableOpacity>
      {showOptions && (
        <View>
          {data.map((val, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                onPress={() => onSelectedItem(val)}>
                <Text style={styles.TextStyle}>{val.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  //   Container: {
  //     flex: 1,
  //   },
  TextStyle: {
    color: 'black',
  },
  DropDown: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 10,
    minHeight: 5,
    width: screenWidth * 0.8,
    borderRadius: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
