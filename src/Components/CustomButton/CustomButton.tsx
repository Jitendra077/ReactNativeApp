import {Pressable, Text, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './Style';
import {customButtonProps} from './Type';

const CustomButton: FC<customButtonProps> = ({title, onAdd, customStyle}) => {
  return (
    <Pressable onPress={onAdd}>
      <View style={[styles.buttonContainer, customStyle]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
