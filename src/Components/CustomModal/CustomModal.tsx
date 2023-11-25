import {Modal, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import CustomInput from '../CustomInput/CustomInput';

export type CustomModalProps = {
  isVisible: boolean;
};

const CustomModal: FC<CustomModalProps> = ({isVisible}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal visible={isVisible}>
        <CustomInput Placeholder="Enter your name" Value="JEETU" />
        <CustomInput Placeholder="Enter your name" Value="JEETU" />
        <CustomInput Placeholder="Enter your name" Value="JEETU" />
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: '80%',
    backgroundColor: 'red',
  },
});
