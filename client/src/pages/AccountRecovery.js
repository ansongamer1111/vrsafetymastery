import React from 'react';
import './AccountRecovery.css';  // Custom styles

function AccountRecovery() {
  return (
    <div className="account-recovery">
      <h1>Account Recovery</h1>
      <p>Forgot your password? Enter your email to receive instructions on how to reset it and regain access to your VR Safety Mastery account.</p>
      <div className="cta-buttons">
        <a href="/login" className="btn-primary">Back to Login</a>
      </div>
    </div>
  );
}

export default AccountRecovery;
