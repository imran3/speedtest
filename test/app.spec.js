var expect  = require('chai').expect;
var request = require('request');

it('Main page content', () =>{
    const expectedBody = JSON.stringify({msg: "hello there!"})
    request('http://localhost:8080' , (error, res, body) => {
        console.log(body)
        expect(body).to.equal(expectedBody);
    });
});