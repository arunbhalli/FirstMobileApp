import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const firstscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello first screen</Text>
      <Button
        title="PressMe!"
        onPress={() => navigation.navigate('Second Screen',{name:'Thomas'})}
      />
    </View>
  );
};

export default firstscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
});
