// business logic function
// "pure" function: no side-effects, it receives all data from arguments, 
// and only returns a value
function addNumbers(num1, num2) {
    return num1 + num2;
}

function updateDom(value) {
    // remember: Node does not have a document to work with
    // the document is provided by the browser Document Object Model
    // function also takes a value from outside its arguments (the html element)
    let resultNode = document.querySelector("#result");
    if(resultNode) {
        // "side-effect": modifies something outside of the return
        resultNode.textContent = `Result of the operation is ${value}`;
    }
}

// "integration": get a value from addNumbers and use it to update the dom
function init() {
    const result = addNumbers(10, 20);
    updateDom(result);
}

// if our runtime environment is the browser, invoke init
if(typeof window !== "undefined") {
    init();
} else {
    // if not, export these functions so that they can be used in external files
    // no error is thrown because init() is never invoked
    module.exports = { addNumbers, updateDom, init };
}