import { usContext } from "../src/base-pruebas/06-deses-obj";

describe('Prueba del archivo 06-deses-obj.js', () => {
    test('usContext debe retonar un objeto', () => {

        const persona = {
            nombre: 'David',
            edad: 42,
            clave: 'ABC123'
        };
        
        const clave = 'ABC123';
        const edad = 42;

        const objUsContext = usContext(persona);

        expect(objUsContext).toStrictEqual({
            nombre: 'David',
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});