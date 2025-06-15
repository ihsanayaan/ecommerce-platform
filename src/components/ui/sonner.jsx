import React from 'react';
import ReactDOM from 'react-dom';

const Toast = ({ message, type }) => {
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
      type === 'success' ? 'bg-green-500' : 
      type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    } text-white`}>
      {message}
    </div>
  );
};

export const toast = {
  success: (message) => {
    const toastElement = document.createElement('div');
    document.body.appendChild(toastElement);
    ReactDOM.render(<Toast message={message} type="success" />, toastElement);
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(toastElement);
      document.body.removeChild(toastElement);
    }, 3000);
  },
  error: (message) => {
    const toastElement = document.createElement('div');
    document.body.appendChild(toastElement);
    ReactDOM.render(<Toast message={message} type="error" />, toastElement);
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(toastElement);
      document.body.removeChild(toastElement);
    }, 3000);
  }
};

export const Toaster = () => null;