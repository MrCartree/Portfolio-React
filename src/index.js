import React from 'react';
import ReactDOM from 'react-dom';
import { Projects } from "./Projects";
import { Blog } from "./Blog"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


ReactDOM.render(
  <App projects={Projects} blog={Blog} />,
  document.getElementById('root')
);

