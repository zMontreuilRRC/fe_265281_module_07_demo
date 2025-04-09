// import functions from another file for use in this one
const {addNumbers, updateDom} = require("./script");

// import JSDOM object from package
const { JSDOM } = require("jsdom");

// "function-context-expected outcome"
test("addNumbers with correct arguments returns a sum", () => {
    // arrange
    const operandOne = 10;
    const operandTwo = 20;

    // act
    const returnedValue = addNumbers(operandOne, operandTwo);

    // assert
    expect(returnedValue).toBe(30);
});

test("updateDom with valid args adds updates text in html element", () => {
    // create new "fake DOM" containing our test HTML
    const testDom = new JSDOM(`<!DOCTYPE html><p id="result">Hello world</p>`);

    // set the fake dom as the global.dom so that our function uses it as the document
    global.document = testDom.window.document;
    const testValue = 30;

    updateDom(testValue);

    const actualHTML = global.document.querySelector("#result").textContent;
    expect(actualHTML).toBe("Result of the operation is 30");
});