import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import Step1 from './components/Step1';
import Container from './components/Container'
import { useState } from 'react';
function App() {
  const [matrix, setMatrix] = useState([[0,2,0],[0,0,0],[0,0,0]]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [obstaclesCount, setObstaclesCount] = useState(0);

  return (
    <div>
      <Container  rows={rows} columns={columns} obstaclesCount={obstaclesCount} />
    </div>
  );
}

export default App;
