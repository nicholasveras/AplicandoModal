import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, SafeAreaView } from 'react-native';

import Detalhes from './src/Detalhes';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal(){
    setModalVisible(true)
  }

  function sairModal(){
    setModalVisible(false)
  }
  return (
    
    <View style={styles.container}>
      
      <Button title="Acessar" onPress={ abrirModal }/>

      <Modal transparent={true} animationType='slide' visible={modalVisible}>
        <Detalhes fechar={sairModal}/>
      </Modal>

      <StatusBar style="auto" />

      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
