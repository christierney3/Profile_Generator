const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('getOffice', () => {
        it("should return manager's office #", () => {
            let manager = new Manager('Chris', 16, 'chris@chris.com', 4)
            expect(manager.office).toEqual(manager.getOffice())
        })
    })
})