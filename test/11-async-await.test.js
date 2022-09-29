
import { getImagen } from './../src/base-pruebas/11-async-await'

describe('prueba en 11-async-await', () => {

    test('getImagen debe retornar un URL de imagen', async() => {
        
        const url = await getImagen();
        // console.log(url);
        expect( typeof url ).toBe('string');
        // expect(url).toBe('No se encontro la imagen')

    });

});