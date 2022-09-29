import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
import CounterApp2 from './CounterApp2'
import FirstApp from './FirstApp';
import { HelloWorld, OtroComponente } from './HelloWorld';

//importamos de forma global el estilo del archivo creado
import './style.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            {/* <HelloWorld />
            <OtroComponente />
            <CounterApp value={10}/> */}
            {/* <CounterApp2 /> */}
            <FirstApp title="Hola, soy el Sr. Vegeta"/>
        </React.StrictMode>

    );