import React, { useState } from 'react';
import Box from './Box';

function BoxGrid() {
    const [value, setValue] = useState('');
    const [boxes, setBoxes] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    
    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        
        // check if input value is non numeric
        if (!/^\d*$/.test(inputValue)) {
            setErrorMessage("Please enter a valid number");
        } else {
            setValue(inputValue);
            setErrorMessage('');
        }
    

        // create elements according to input value
        if (!inputValue || parseInt(inputValue) > 100) {
          setBoxes([]);
        } else {
          const newBoxes = [];
          for (let i = 0; i < parseInt(inputValue); i++) {
            const boxRow = [];
            for (let j = 0; j < parseInt(inputValue); j++) {
              boxRow.push(<Box key={j} hoverColor={randomColor()} />);
            }
            newBoxes.push(<ul key={i}>{boxRow}</ul>);
          }
          setBoxes(newBoxes);
        }
      };

    //   generate random color to mouseover on liItem
      const randomColor = () => {
        const color = [];
        for (let i = 0; i < 3; i++) {
          color.push(Math.floor(Math.random() * 256));
        }
        return `rgb(${color.join(', ')})`;
      };

  return (
    <>
        <section className="form-wrapper">
            <h1>Create Custom Number of Boxes</h1>
            <div className="input-wrapper">
                <input 
                    value={value} 
                    onChange={handleChange} 
                    className={`form-control ${(value && errorMessage) || (value && parseInt(value)) > 100 ? 'error-occur' : ''}`}
                    id="valueBox" 
                    type="text" 
                    placeholder="Enter Box Value..."
                />
                {
                    value && (
                    <div className={`warningMsg ${errorMessage || (parseInt(value) > 100) ? 'on' : ''}`}>
                        {errorMessage || `Your have entered ${value}, it should be less than or equal to 100`}
                    </div>)
                }
            </div>
        </section>
        <section id="wrapperBox" className="box-wrapper">
            {
                boxes.map((box, index) => (
                    <React.Fragment key={index}>{box}</React.Fragment>
                ))
            }
        </section>
    </>
  )
}

export default BoxGrid