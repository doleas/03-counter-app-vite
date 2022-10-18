import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"


describe('pruebas en <FirstApp />', () => {

    const title = 'Hola, soy el Sr Goku';
    const subtitle = 'Hola, soy el Sr Vegeta';

    test('debe hacer match con el snapshot', () => { 
        const { container } = render(<FirstApp title={title} />);
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el mensaje, Hola, soy el Sr Goku', () => { 
        
        render(<FirstApp title={title} />);
        expect( screen.getByText(title) ).toBeTruthy();//tiene que existir y la prueba pasa
        // expect( screen.getByText(title) ).not.toBeTruthy();//no tiene que existir y la prueba pasa
        // screen.debug();
    })

    test('debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={ title } />);
        //esta atado con el título h1
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render( <FirstApp 
            title={ title } 
            subtitle={ subtitle }
            />);
        
            expect( screen.getAllByText(subtitle).length).toBe(2);

    })

});