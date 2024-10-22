'use client';

import React from 'react';

const BottomMenu: React.FC = () => (
  <div className="menu-section text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Lunch</h3>
          <p>Monday - Friday: 11:00am - 2:30pm</p>
          <p>Saturday - Sunday: Not open</p>
        </div>
        <div className="col-md-4">
          <h3>Bar</h3>
          <p>Monday - Friday: From 11:00am to closing</p>
          <p>Saturday - Sunday: Not open</p>
        </div>
        <div className="col-md-4">
          <h3>Dinner</h3>
          <p>Monday - Friday: 5:00pm - 9:00pm</p>
          <p>Saturday - Sunday: Not open</p>
        </div>
      </div>
    </div>
  </div>
);

export default BottomMenu;
