import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import ReactStates from './Components/ReactStates';
import ReactNestedStates from './Components/ReactNestedStates';
import ReactProps from './Components/ReactProps';

export default function App() {
  const [themeMode, setThemeMode] = useState({
    bodyBg: '#e4e7ebee',
    background: '#92c1f1',
    color: 'black',
    txtAreaBg: '#e4e7ebee',
    modeTxt: 'Enable'
  });

  const DocumentBg = () => {
    document.body.style.backgroundColor = themeMode.bodyBg;
  }
  DocumentBg();

  const BtnClickHandle = () => {
    if (themeMode.background === '#92c1f1') {
      setThemeMode({
        bodyBg: '#05283c',
        background: '#10496a',
        color: 'white',
        txtAreaBg: '#10496a',
        modeTxt: 'Disable'
      });
    }
    else {
      setThemeMode({
        bodyBg: '#e4e7ebee',
        background: '#92c1f1',
        color: 'black',
        txtAreaBg: '#e4e7ebee',
        modeTxt: 'Enable'
      });
    }
  }

  return (

    <BrowserRouter>
      <Navbar NavBg={themeMode.background} color={themeMode.color} ModeTxt={themeMode.modeTxt} BtnClickHandle={BtnClickHandle} />

      <div className="container my-5">
        <Routes>
          <Route path="/ReactNestedStates" element={<ReactNestedStates color={themeMode.color} background={themeMode.background} />} />

          <Route path="/ReactProps" element={<>
            <div className='row'>
              <ReactProps color={themeMode.color} background={themeMode.background} Title="Pakistan" />
              <ReactProps color={themeMode.color} background={themeMode.background} Title="Australia" />
              <ReactProps color={themeMode.color} background={themeMode.background} Title="England" />
            </div></>} />

          <Route path="/" element={<ReactStates color={themeMode.color} txtAreaBg={themeMode.txtAreaBg} />} />
        </Routes>

        </div>
    </BrowserRouter>

  );
}
