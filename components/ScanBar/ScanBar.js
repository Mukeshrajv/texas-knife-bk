import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getButtonShown } from '../../Slice/ProductDetailsSlice';
import { getProductDetails } from '../../Slice/ProductDetailsSlice';
import { useDispatch } from 'react-redux';

const ScanBar= ({navigation}) => {
    const dispatch=useDispatch()

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if(data){
        dispatch(getButtonShown(true));
        navigation.navigate('pop')
        dispatch(getProductDetails(data))
    }
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    // Handle the scanned data as needed
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity onPress={() => setScanned(false)} style={styles.rescanButton}>
          <Text style={styles.rescanText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  rescanButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  rescanText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ScanBar;
