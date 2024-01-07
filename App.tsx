import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ScratchCard from './components/ScratchCard/ScratchCard';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScratchCard canvasHeight={300}
        canvasWidth={300}
        padding={20}
        borderRadius={20}
        scratchCardBgColor={"#fff"}
        scratchStrokeWidth={60}
        scratchStrokeColor='#2C4D3D' />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
