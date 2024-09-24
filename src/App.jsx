import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPasswordRequest from './resetpassword/ResetPasswordRequest';
import PasswordSent from './resetpassword/PasswordSent';
import ResetPasswordConfirm from './resetpassword/ResetPasswordConfirm';


const App = () => {
  return (
    <Router>
      <Routes>
        
      <Route path="/reset-password/:token" element={<ResetPasswordConfirm />} />
        <Route path="/reset-password" element={<ResetPasswordRequest />} />
        <Route path="/password-sent" element={<PasswordSent />} />
      </Routes>
    </Router>
  );
};


export default App;
