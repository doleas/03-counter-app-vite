import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import { HelloWorld, OtroComponente } from './HelloWorld';

//importamos de forma global el estilo del archivo creado
import './style.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <HelloWorld />
            <OtroComponente />
            <FirstApp title="React de Cero a Experto" subtitle={1716251978}/>
        </React.StrictMode>

    );