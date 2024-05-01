import React, { createContext, useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

// Create a context for toast messages
const ToastContext = createContext();

// Custom hook to consume the toast context
export const useToast = () => useContext(ToastContext);

// ToastProvider component to wrap the app and manage toast state
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "default", duration = 3000) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    setTimeout(() => dismissToast(id), duration);
  };

  const dismissToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const getToastStyle = (type) => {
    switch (type) {
      case "success":
        return styles.successToast;
      case "error":
        return styles.errorToast;
      default:
        return styles.defaultToast;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      <View style={styles.toastContainer}>
        {toasts.map((toast) => (
          <Animated.View
            key={toast.id}
            style={[styles.toast, getToastStyle(toast.type)]}
          >
            <TouchableOpacity onPress={() => dismissToast(toast.id)}>
              <Text style={styles.toastText}>{toast.message}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    bottom: 30,
    left: 10,
    right: 10,
    alignItems: "center",
  },
  toast: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 5,
    opacity: new Animated.Value(1),
  },
  defaultToast: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  successToast: {
    backgroundColor: "green",
  },
  errorToast: {
    backgroundColor: "red",
  },
  toastText: {
    color: "white",
  },
});
