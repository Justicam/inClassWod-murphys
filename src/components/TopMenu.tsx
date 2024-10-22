'use client';

import React from 'react';

const TopMenu: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-custom">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Murphy's Bar & Grill</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">St. Patrick's Day</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">To Go Ordering</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-instagram"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-facebook"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-twitter"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default TopMenu;
