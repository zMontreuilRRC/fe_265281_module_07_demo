function addNumbers(num1, num2) {
    return num1 + num2;
}

function updateDom(value) {
    // remember: Node does not have a document to work with
    // the document is provided by the browser Document Object Model
    let resultDivNode = document.querySelector("#result");
    if(resultDivNode) {
        resultDivNode.innerText = `Result of the operation is ${value}`;
    }
}

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