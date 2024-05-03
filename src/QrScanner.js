import React, { useRef, useEffect } from "react";
import Html5QrcodeScanner from "html5-qrcode";

const QRScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const scanner = new Html5QrcodeScanner(
    "qr-reader",
    { fps: 10 },
    /* verbose= */ true
  );

  useEffect(() => {
    scanner.render(videoRef.current);
    scanner.start(
      { facingMode: "environment" }, // Use the rear camera (if available)
      { fps: 10 }, // Scan framerate
      (qrCodeMessage) => {
        onScan(qrCodeMessage);
      },
      (errorMessage) => {
        console.error(errorMessage);
      }
    );

    return () => {
      scanner.stop();
    };
  }, [onScan]);

  return <div id="qr-reader" ref={videoRef}></div>;
};

export default QRScanner;
