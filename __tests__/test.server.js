const app = require('../src/app')
const request = require('supertest')


describe('Testes de servidor', () => {

    test('Deve inicializar o servidor na porta 3000', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })

})