import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Test from './App';
// default 값으로 하나만 내보낸 것은 이름을 바꿔도 됨 (보통은 이름 맞춰줌)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


