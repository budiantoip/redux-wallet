import './App.css';

import ColorForm from './containers/ColorForm';
import ColorList from './containers/ColorList';
import Wallet from './containers/Wallet';

function App() {
  return (
    <div className="App">
      <Wallet />
      <ColorList />
      <ColorForm />
    </div>
  );
}

export default App;
