const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it("should return engineer's github username", () => {
            let engineer = new Engineer('Chris', 16, 'chris@chris.com', 'christierney3')
            expect(engineer.github).toEqual(engineer.getGithub())
        })
    })
})