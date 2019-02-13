'use strict'

const assert = require('chai').assert
const wu = require('../index.js')
describe("signRawTransaction",()=>{
    before(()=>{
        console.log("---")
    })
    it('set path', ()=>{
        console.log("path")
        wu.signRawTransaction({},'0xbd100cf8286136659a7d63a38a154e28dbf3e0fd','wanglu')
    })
    after(()=>{
        console.log("===")
    })
})