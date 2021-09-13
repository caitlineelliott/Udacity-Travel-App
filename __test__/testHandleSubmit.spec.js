import 'regenerator-runtime/runtime'
const handleSubmit = require('../src/client/js/handleSubmit');

test('User input is valid', done => {
    try {
        expect(handleSubmit).toBeDefined();
        done();
    } catch (error) {
        done(error);
    }
});