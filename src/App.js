import React from 'react';
import Header from './components/Header/Header';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';
import './App.css';

function App() {
  return (<>
    <Header />
    <div className="services">
      <ServiceAdd />
      <ServiceList />
    </div>
  </>);
}

export default App;