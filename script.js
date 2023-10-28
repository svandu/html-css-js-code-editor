function run() {
    const htmlCode = document.querySelector("#html-code").value;
    const cssCode = document.querySelector("#css-code").value;
    const jsCode = document.querySelector("#js-code").value;
    const output = document.querySelector("#output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>" 
    output.contentWindow.eval(jsCode);


}