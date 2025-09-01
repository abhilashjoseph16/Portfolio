import React from "react";

function Alert({ message, type, onClose }) {
  if (!message) {
    return null;
  }
  return (
    <div className={`custom-alert ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
}

export default Alert;
