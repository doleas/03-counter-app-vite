
describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe fallar', () => {
        // if ( 1 === 0){
        //     throw new Error('No debe dividir para cero');
        // }
        // Jest nos ayuda a no poner código de manera manual

        // 1. Inicialización
        const message1 = 'Hola mundo';
        // 2.Estímulo
        const message2 = `${message1.trim()}`;
        // 3.Aserciones  > observamos el comportamiento… esperado
        // expect( message1 ).toBe( message2 );
        expect(message1).toBe(message2);
    })
})
