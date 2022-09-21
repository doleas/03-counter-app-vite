import { getHeroeById, getHeroesByOwner } from '../src/base-pruebas/08-imp-exp';
import heroes from '../src/data/heroes';


describe('Pruebas archivo 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        // console.log(hero); //muestra el herore por el id
        expect(hero).toStrictEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe de retornar undefine si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        // console.log(hero); //muestra el undefine
        expect(hero).toBeFalsy();

    });
    //Tarea
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const own = 'DC';
        const hero = getHeroesByOwner(own);
        expect(hero.length).toBe(3);
        expect(hero).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const own = 'Marvel';
        const hero = getHeroesByOwner(own);
        expect(hero.length).toBe(2);
        //utilizaria el mismo filtro de la consulta importando heroes
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === own))
    });

});