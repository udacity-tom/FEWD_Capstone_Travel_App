const app = require('../src/server/index.js');
const supertest = require('supertest');
const request = supertest(app);

describe("Checks endpoints of server", () => {
    test('Gets the website prod endpoint', async done => {
        const response = await request.get('/');
        expect(response.body).toBeDefined();
        expect(response.status).toBe(200);
        done();
    })
    test('Gets weatherBit endpoint ', async done => {
        const object = { lng: 0, lat: 51, name: 'Newick', countryCode: 'XX', dateDep: '2021-04-12'};
        const data = {longtitude: object.lng, lattitude: object.lat, cityName: object.name, countryCode: object.countryCode, dateDep: object.dateDep};
        const response = await request.post('/getWbit').send(data);
        expect(response).toBeDefined();
        expect(response.statusCode).toBe(200);
        expect(response.body.country_code).toBe('GB');
        done();
    })
})
