'use strict'
var jasmine = require('jasmine');
let myApp = require('./src');
describe("Get the prime numbers",function(){

  it("should get prime numbers within a given integer", function(){
    expect(myApp.getPrimes(7)).toEqual([2, 3, 5, 7]);
  });

  it("should return `[]` for positive integer less than two", function(){
    expect(myApp.getPrimes(1)).toEqual([]);
  });

  it("should return `Invalid input`  for string input", function(){
    expect(myApp.getPrimes("john")).toEqual('Invalid input');
  });

  it("should return `[]` for negative input", function(){
    expect(myApp.getPrimes(-3)).toEqual([]);
  });

  it("should return `[]` for input `0`", function(){
    expect(myApp.getPrimes(0)).toEqual([]);
  });

  it("should return [ 2, 3, 5, 7, 11, 13 ] for input 16", function(){
    expect(myApp.getPrimes(16)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });

  it("should return `Invalid input` since `seven` is a string", function(){
    expect(myApp.getPrimes("seven")).toEqual("Invalid input");
  });

  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for input 30", function(){
    expect(myApp.getPrimes(30)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
  });


})