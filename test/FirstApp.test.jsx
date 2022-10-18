import { getByTestId, render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"


describe('pruebas en <FirstApp />', () => {

    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola, soy el Sr Goku';
    //     const { container } = render(<FirstApp title={title} />);

    //     expect(container).toMatchSnapshot();

    // });

    test('Debe mostrar el titulo en un h1', () => {

        const title = 'Hola, soy el Sr Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);//no me importa si hay letras al inicio o después tiene que contener esa palabra
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo eviado por props', () => {

        const title = 'Hola, soy el Sr Goku';
        const subtitle = 'Hola soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />);

        expect(getAllByText(subtitle).length ).toBe(1);
       
    });

});