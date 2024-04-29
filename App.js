import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, Platform } from "react-native";
import BarcodeMask from "react-native-barcode-mask";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);

  let x = 5;
  let y = 10;
  let z = 25;
  x = y;
  x = y = z;
  console.log("X", x);
  console.log("y", y);
  console.log("z", z);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log("Barcode data:", data);
  };

  if (hasPermission === null) {
    return <View />;
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
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={handleBarCodeScanned}
      >
        <BarcodeMask edgeColor="#F2F2F2" showAnimatedLine />
      </Camera>
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
