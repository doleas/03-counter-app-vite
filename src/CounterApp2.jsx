
import PropTypes from 'prop-types';

import {useState} from 'react';

//tarea
const CounterApp2 = ({value}) => {

    console.log('render');

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter((c)=>c+1);
    }

    const handleQuit = () => setCounter((c)=>c-1);
    

    const handReset = () => setCounter(value);

//Hay que tener encuenta que cuando sufra un cambio en el estado va a volverse a ejecutar el funcional component
//literalmente se vuelve a disparar el componente
    return (  
        <>
            <h1 style={{textAlign: "center"}}>COUNTER APP</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleQuit}> -1 </button>
            <button onClick={handReset}> Reset </button>

        </>
    )
}

export default CounterApp2;


CounterApp2.propTypes = {
    value: PropTypes.number
}

CounterApp2.defaultProps = {
    value: 10
}