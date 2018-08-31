/* 
Tests

3 - it returns an multiple array in the correct order when passed without order dependancies
4 - it returns an array in the correct order when one element requires depends on another
5 - it returns an array with element with mulitple dependancies in the correct order
6 - it returns an error message "jobs can’t depend on themselves" if a dependancy relys on itself
7 - it returns an error message "jobs can’t have circular dependencies" if there is a circular dependancy

*/

const { expect } = require("chai");
const { orderOfJobs } = require("../orderOfJobs")

describe("order of jobs", () => {
  it("#1 returns and empty array if no job has is passed", () => {
    const input = "";
    const actual = orderOfJobs(input);
    expect(actual).to.eql([])
  })

  it("#2 returns a single array when one job is passed with no dependancies are passed", () => {
    const input = '{"a":""}';
    const actual = orderOfJobs(input);
    expect(actual).to.eql(["a"]);
  })

  it("#3 returns an array in the correct order when multiple jobs are passed with no dependencies", () => {
    const input = '{"a":"", "b":"", "c":""}';
    const actual = orderOfJobs(input);
    expect(actual).to.eql(["a", "b", "c"])
  })

  it("#4 returns error message 'Jobs cant depend on itself' if it depends on itself", () => {
    const input = '{"a": "a"}';
    const actual = orderOfJobs(input);
    expect(actual).to.equal("Jobs cant depend on itself")
  })

})