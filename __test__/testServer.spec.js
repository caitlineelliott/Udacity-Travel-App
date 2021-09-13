import 'regenerator-runtime/runtime'
const app = require('../src/server/index')
const supertest = require('supertest');
const request = supertest(app);

it('testing server is online', async () => {
    await request.get("/jest")
        .expect(200)
        .then((response) =>
            expect(response.body.msg).toBe('passed'))
})
