import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('Pruebas de 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //los objetos se comparan haciendo una referencia a un espacio de memoria por eso toBe no cumple
        //toEqual compara recursivamente todas las propiedades de un objeto instanciado
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'David';

        const userActivo = getUsuarioActivo(name);

        expect(userActivo).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
});