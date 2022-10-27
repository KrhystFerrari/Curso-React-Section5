import './App.css';
import MyForms from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{name: 'João', email: 'joão@gmail.com'}} />
    </div>
  );
}

export default App;
