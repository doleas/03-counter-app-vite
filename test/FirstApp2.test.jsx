import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"


describe('pruebas en <FirstApp />', () => {

    const title = 'Hola, soy el Sr Goku';

    test('debe hacer match con el snapshot', () => { 
        const { container } = render(<FirstApp title={title} />)
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el mensaje, Hola, soy el Sr Goku', () => { 
        const { container } = render(<FirstApp title={title} />)
        expect( screen.getByTitle(title));
    })

});