import Soma from './Soma'
import Subtrair from './Subtrair'
import Dividir from './Dividir'
import Multiplicar from './Multiplicar'

describe('Teste unitário', function () {

    it('Teste função Somar', function () {
        expect(Soma (2, 5)).toEqual(7)
    })

    it('Teste função Subtrair', function () {
        expect(Subtrair (5, 2)).toEqual(3)
    })

    it('Teste função Dividir', function () {
        expect(Dividir (10, 2)).toEqual(5)
    })

    it('Teste função Multiplicar', function () {
        expect(Multiplicar (10, 2)).toEqual(20)
    })
})

// describe('Teste unitário Subtrair', function () {

//     it('Teste função subtrair', function () {
//         expect(Subtrair (5, 2)).toEqual(3)
//     })
// })