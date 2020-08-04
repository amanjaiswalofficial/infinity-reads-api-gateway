const request = require('supertest');
const app = require('../../server/index.js');

describe("GET /health", () => {
    test("Tests health status", async (done) => {
        const response = await request(app).get('/health');
        expect(response.body['status']).toEqual('ok');
        expect(response.statusCode).toBe(200);
        done();
    })
})
