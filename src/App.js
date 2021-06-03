import './App.css';

import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Card } from 'primereact/card';
import TestComponent from './components/TestComponent';

PrimeReact.ripple = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <Card title="Title" subTitle="SubTitle">Text</Card>
        
      </header>
    </div>
  );
}

export default App;
