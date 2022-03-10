const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("getName", () => {
        it("should return name value", () => {
            let employee = new Employee('Chris', 16, 'chris@chris.com')
            expect(employee.name).toEqual(employee.getName())
        })
    })

    describe("getId", () => {
        it("should return an id #", () => {
            let employee = new Employee('Chris', 16, 'chris@chris.com')
            expect(employee.id).toEqual(employee.getId())
        })
    })

    describe("getEmail", () => {
        it("should return an email", () => {
            let employee = new Employee('Chris', 16, 'chris@chris.com')
            expect(employee.email).toEqual(employee.getEmail())
        })
    })

    describe("getRole", () => {
        it("should return a role", () => {
            let employee = new Employee('Chris', 16, 'chris@chris.com')
            expect(employee.getRole()).toEqual('Employee')
        })
    })    
})