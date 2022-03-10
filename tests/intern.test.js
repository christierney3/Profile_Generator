const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it("should return Intern's school", () => {
            let intern = new Intern('Chris', 16, 'chris@chris.com', 'CU Boulder')
            expect(intern.school).toEqual(intern.getSchool())
        })
    })
})