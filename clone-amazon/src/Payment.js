import React from 'react';
import './Payment.css';

function Payment() {
  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment Section - Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivery Address</h3>
          </div>
        </div>
        {/* Payment Section - Review Items */}
        <div className="payment__section"></div>
        {/* Payment Section - Payment Method*/}
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;
