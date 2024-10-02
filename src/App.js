import './App.css';
import RandomQuoteGenerator from './components/RandomQuote/index';
import Controller from './components/controller';
import Calculator from './components/Calculator';
import Colors from './components/Colors';

function App() {
  // add a list of useStates
  // buttons for each component
  
  return (
    <div className="App">
      <div className="container">
        {/* <div className='row'> <RandomQuoteGenerator /> </div> */}
        {/* <div className='row'> < Calculator /> </div> */}
        <div className='row'> < Colors /> </div>
      </div>

      
      {/* <Controller /> */}
      
    </div>
  );
}

export default App;
