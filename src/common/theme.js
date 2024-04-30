import { Dimensions, Platform } from "react-native";
const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("screen");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const isIos = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";
const isWeb = Platform.OS === "web";

const scale = (size: number) => (viewportWidth / guidelineBaseWidth) * size;
const verticalScale = (size) => (viewportHeight / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  isWeb
    ? size * 1.4
    : isAndroid
    ? size + (scale(size) - size) * 0.35
    : size + (scale(size) - size) * 0.4;

const deviceWidth = viewportWidth;
const deviceHeight = viewportHeight;

const colors = {
  white: "#ffffff",
  black: "#000000",
  lBlack: "rgb(51, 51, 51)",
  blue: "#1A78F7",
  lBlue: "#E8F1FE",
  blue1: "rgba(75, 121, 236, 0.1)",
  nero: "#222222",
  grey: "#afafaf",
  grey0: "#fafafa",
  grey1: "#f2f2f2",
  grey2: "#e5e5e5",
  grey3: "#ccc",
  grey4: "#a6a6a6",
  grey5: "#808080",
  grey6: "#f0f2f5",
  red: "red",
  transparent: "#ffffff00",
  transparentWhite: "#ffffff55",
  blackTransparent: "rgba(0,0,0,0.5)",
  blackTransparent1: "rgba(0,0,0,0.2)",
  darkenText: "#687684",
  textSecondary: "#687684",
  textPrimary: "#1E1F22",
  lightBlue: "#E8F1FE",
  lightBlack: "#202434",
  darkBlue: "rgb(48, 35, 174)",
  lightPink: "rgb(200, 109, 215)",
  lRed: "#fce4e2",
  lRed1: "#f34c3d",
};

const theme = {
  isIos,
  isWeb,
  isAndroid,
  colors,
  deviceWidth,
  deviceHeight,
  moderateScale,
  verticalScale,
};

export default theme;
