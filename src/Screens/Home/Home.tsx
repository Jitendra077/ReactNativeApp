import {View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {styles} from './Style';
import CustomModal from '../../Components/CustomModal/CustomModal';

const Home = () => {
  const [ModalIsVisible, setISModalVisible] = useState<boolean>(false);

  const onAddClick = () => {
    console.log('object');
    setISModalVisible(true);
  };
  return (
    <View style={styles.homeContainer}>
      <CustomButton onAdd={onAddClick} title="Add" />
      <CustomModal isVisible={ModalIsVisible} />
    </View>
  );
};

export default Home;
