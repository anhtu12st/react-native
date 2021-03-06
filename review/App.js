import React, {useState, useEffect} from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import {globalStyles} from './styles/global';
import DrawerScreen from './routes/Drawer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.center}>
        <Text>Helee</Text>
        <ActivityIndicator color="#000" size="large" />
      </View>
    );
  }

  return <DrawerScreen />;
}

const styles = StyleSheet.create({});
