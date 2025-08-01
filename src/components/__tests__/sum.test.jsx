import { sum } from "../Sum"

test("sum function should add two numbers",()=>{
     
     const result= sum(1,2);
     

//  this is know as assertion
     expect(result).toBe(3);
})



