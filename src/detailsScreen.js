import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, Platform } from "react-native";
import { useToast } from "./contex/toastProvider";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const { showToast } = useToast();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  //   const { callback } = route.params;

  const handleBarCodeScanned = ({ type, data }) => {
    console.log("Barcode data:", data);
    showToast(data, "success", 3000);
    navigation.navigate("Home", { data: data });

    // navigation.goBack();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to access the camera
        </Text>
        <Button
          onPress={() => {
            Camera.requestCameraPermissionsAsync().then(({ status }) => {
              setHasPermission(status === "granted");
            });
          }}
          title="Grant Permission"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Camera
        style={styles.camera}
        onBarCodeScanned={handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
});
