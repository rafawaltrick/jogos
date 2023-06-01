import axios, { AxiosInstance } from 'axios';
import React from 'react';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
