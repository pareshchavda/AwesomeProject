import React from "react";
import { ToastProvider } from "./src/contex/toastProvider";
import Navigator from "./src/navigator";

export default function App() {
  return (
    <ToastProvider>
      <Navigator />
    </ToastProvider>
  );
}
