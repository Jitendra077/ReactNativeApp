import {StyleSheet, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {CustomInputProps} from './Type';

const CustomInput: FC<CustomInputProps> = ({
  Placeholder = 'Put your placeholder',
  Value = '10',
}) => {
  return (
    <View>
      <TextInput placeholder={Placeholder} value={Value} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
