import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr.js', () => {

    test('Debe retornar un string y un numero', () => {
        // const retArr = retornaArreglo();//podria ser de esta forma, pero puedo hacer la desestruturacion
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        //Se puede saber que tipo de dato tiene la variable y comparar desde ahi
        // console.log(typeof letters);
        // console.log(typeof numbers);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        //otra forma de comparar con el tipo de dato
        expect(letters).toEqual(expect.any(String));
        
    });
});