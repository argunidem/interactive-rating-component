import { Fragment, useState } from 'react';
import './App.css';
import star from './images/icon-star.svg';
import thankYou from './images/illustration-thank-you.svg';
import { motion } from 'framer-motion';

function App() {
  const [selected, setSelected] = useState(false);
  const [selection, setSelection] = useState(0);

  const handleClick = (number) => {
    setSelection(number);
  };

  const handleSubmit = () => {
    setSelected(true);
  };

  const rates = [1, 2, 3, 4, 5];

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, transition: { scale: 0, duration: 2 } }}
    >
      <motion.section className='card'>
        {selected ? (
          <Fragment>
            <img src={thankYou} alt='Thank You' />
            <p className='info'>You selected {selection} out of 5</p>
            <h1 className='thank-you'>Thank You!</h1>
            <p>
              We appreciate you takin the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <div className='star-container'>
              <img src={star} alt='star' />
            </div>
            <h1>How did we do?</h1>
            <p>
              How did we do? Please let us know how we did with your support
              request. All feedback is appreciated to help us improve our
              offering!
            </p>
            <div className='numbers'>
              {rates.map((rate, index) => {
                return (
                  <span
                    onClick={() => handleClick(rate)}
                    className={`rate ${selection === rate && 'selected'}`}
                    key={index + 1}
                  >
                    {rate}
                  </span>
                );
              })}
            </div>
            <button onClick={handleSubmit}>SUBMIT</button>
          </Fragment>
        )}
      </motion.section>
    </motion.main>
  );
}

export default App;
