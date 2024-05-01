import { View, Text } from "react-native";
import React from "react";
import { ToastProvider } from "./src/common/contex/toastProvider";
import Home from "./src/screens/home";

export default function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}
