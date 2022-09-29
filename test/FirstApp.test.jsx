import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"


describe('pruebas en <FirstApp />', () => {

    test('Debe hacer match con el snapshot', () => { 
        
        const title = 'Hola, soy el Sr Goku';
        render( <FirstApp title={title}/>)
         
    })

})