import {useState} from 'react'

import PropTypes from 'prop-types';



const CounterApp = ({value}) => {
    //Separamos la fucion del boton, esta definida de forma tradicional
    // function handleAdd(event){
    //     console.log(event)
    // }

    //Hooks 
    const [counter, setCounter] = useState(value);

    //funcion de flecha, se recomienda que si no utiliza nada del componente se la saque a fuera
    const handleAdd = (event) => {
        // return console.log(event)
        // setCounter(counter +1);
        setCounter((c)=>c+120);
    }

    return (  
        <>
            <h1> Counter App</h1>
            <h3> {value}</h3>
            {/* Esto es un contador */}
            {/* <button onClick={function(){console.log('+1')}}> Contador </button> */}
            {/* Pero con event puedo tener toda la informacion del evento como posicion... */}
            <button onClick={handleAdd}> Contador </button>
            {/* (event) => handleAdd(event) se lo puede reemplazar por solo manda la referencia a la funcion handleAdd */}

            <h3> {counter}</h3>

        </>
    )
}
 
export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 5
}