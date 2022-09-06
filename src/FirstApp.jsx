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

//creamos una funcion
const SecondApp = (mensaje) => {
    return mensaje = "Hola mundo"; 
     
}
 

const FirstApp = () => {
    return (
        //esto tiene <> el mismo comportamiento que un fragmento o un nodo padre
        <> 
            {/* <h3 style={{ textAlign: "center" }}>{obj.message}</h3> podemos traer la informacion de una variable*/}
            <div style={{ textAlign: "center" }}><code>{JSON.stringify(SecondApp)}</code> </div>
            <h3 style={{ textAlign: "center" }}>{obj.message}</h3>
            <p style={{ textAlign: "center" }}> React JS</p>
        </>
    )
}

export default FirstApp;
