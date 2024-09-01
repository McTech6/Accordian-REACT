import accordionData from './data'; 
import './App.css';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(null);

  const handleQuestion = (id) => {
    setSelected(selected === id ? null : id);
  }

  return (
    <div className="accordion">  
      <div className="wrapper">
        {
          accordionData.length === 0 ? null :
          accordionData.map((item, index) => (
            <div className="item" key={index}>
              <div className="header" onClick={() => handleQuestion(item.id)}>
                <h2>{item.question}</h2>
                <p>{selected === item.id ? '-' : '+'}</p>
              </div>
              <div className={`answer ${selected === item.id ? '' : 'collapsed'}`}>
                {item.answer}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
