import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Container from './components/Container';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Cont = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const App: React.FC = () => {
  return (
    <Router>
      <Cont>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/container" element={<Container />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Cont>
    </Router>
  );
};

export default App;
