import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";
import CounterApp2 from "../src/CounterApp2";


describe('pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('debe hacer match con el el snappshot', () => { 
        
        const { container } = render(<CounterApp value={ initialValue }/>);

        expect(container).toMatchSnapshot();
    
    });

    test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={ 100 }/>);
        expect( screen.getAllByText(100) ).toBeTruthy();

        expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain('100');
    });

    test('debe de incrementar con el botón +1', () => {  

        render( < CounterApp2 value={ initialValue }/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();

    });

    test('debe de decrementar con el botón -1', () => {  

        render( < CounterApp2 value={ initialValue }/>);
        fireEvent.click( screen.getByText('-1') );//fireEvent hace referencia con el click al evento que ocurre en un boton
        screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('debe de funcionar el boton de reset', () => { 
        render( < CounterApp2 value={ initialValue }/> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        // fireEvent.click( screen.getByText('Reset') );
        // screen.debug();
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' }) );

        expect( screen.getByText(initialValue) ).toBeTruthy();

    })

});


