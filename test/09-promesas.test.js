import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";
import heroes from "../src/data/heroes";


describe('pruebas en 09-promesas', () => {

    //el done es una función que llama a la función cuando haya terminado, puede ser cualquier nombre
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {

        const id = 1; //creamos el id=1 para que sea facil de modificar y editar rapidamente
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();

            });
    });

    test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
        .catch( error => {
            // console.log(error);
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

            done();
        });
            
    });

})