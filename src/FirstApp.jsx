import PropTypes from 'prop-types';

//React encontro la solucion para no tener que importar Fragment o tener que ponerlo dentro de un contenedor div
// import { Fragment } from "react";

// const FirstApp = () => {
//     return (
//         <Fragment>
//             <h3 style={{ textAlign: "center" }}>FirstApp</h3>
//             <p style={{ textAlign: "center" }}> React JS</p>
//         </Fragment>
//     )
// }

// const FirstApp = () => {
//     return (
//         //esto tiene <> el mismo comportamiento que un fragmento o un nodo padre
//         <> 
//             <h3 style={{ textAlign: "center" }}>FirstApp</h3>
//             <p style={{ textAlign: "center" }}> React JS</p>
//         </>
//     )
// }

//esto es permitido
const mensaje = "Master en Ingeniería de Software";

//imprimir todo el objeto es permitido solo si se llama cada variable o si se imprime tipo JSON
const obj = {
    message: 'Bienvenido',
    title: 'App'
}

const edad = 42;
//creamos una funcion
const SecondApp = (a, b) => {
    return a * b;

}


// const FirstApp = () => {

//     console.log();
//     return (
//         //esto tiene <> el mismo comportamiento que un fragmento o un nodo padre
//         <> 
//             {/* <h3 style={{ textAlign: "center" }}>{obj.message}</h3> podemos traer la informacion de una variable*/}
//             {/* <div style={{ textAlign: "center" }}><code>{JSON.stringify(SecondApp())}</code> </div> */}
//             <div style={{ textAlign: "center" }}><h3>Tengo {SecondApp(6, 7)} años de edad</h3> </div>
//             <h3 style={{ textAlign: "center" }}>{obj.message}</h3> 
//             <p style={{ textAlign: "center" }}> React JS</p>
//         </>
//     )
// }


const FirstApp = ({title, subtitle, name}) => {

    // if (!title){
    //     throw new Error('El titulo no existe!!');
    // }



    return (
        <>  
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <h3 style={{textAlign: "center"}}>{subtitle}</h3>
            <p style={{textAlign: "center"}}>Soy un titulo !!</p>
            <p style={{textAlign: "right"}}>{name}</p>
        </>
    )
}


export default FirstApp;

FirstApp.propTypes = {

    name: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, //es requerido
}

//defaultprops van a entrar antes que nuestros proptypes
FirstApp.defaultProps = {
    name: 'David Oleas',
    subtitle: 983818763,
    // title: 'Innovación Tecnológica'
}
