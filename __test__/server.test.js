import { changeInputArea } from "../src/client/js/changeInputType";
describe("Changes input area from Text to URL", () => {
    test("checks inputURL area visibility changes, style->display from none to block", () =>{
        document.body.innerHTML = `
            <input id="inputAreaType" />
            <button class="inputURL"></button>
            <textarea class="inputURL"></textarea>
            <button class="inputText"></button>
            <textarea class="inputText"></textarea>
            `;
        require('../src/client/js/changeInputType.js');
        
        const currentInput = document.getElementById("inputAreaType");
        const inputURL = document.getElementsByClassName("inputURL");
        const inputText = document.getElementsByClassName("inputText");
            
        currentInput.checked = true;
        inputURL[0].style.display = "none";
        inputURL[1].style.display = "none";
        inputText[0].style.display = "block";
        inputText[1].style.display = "block";

        changeInputArea();
        expect(inputURL[0].style.display).toEqual("block");
        expect(inputURL[0].style.display).toEqual("block");
        expect(inputText[0].style.display).toEqual("none");
        expect(inputText[1].style.display).toEqual("none");
    });
    test("checks inputText area visibility changes, style->display from none to block", () =>{
        document.body.innerHTML = `
        <input id="inputAreaType" />
        <button class="inputURL"></button>
        <textarea class="inputURL"></textarea>
        <button class="inputText"></button>
        <textarea class="inputText"></textarea>
        `;
    require('../src/client/js/changeInputType.js');
    
    const currentInput = document.getElementById("inputAreaType");
    const inputURL = document.getElementsByClassName("inputURL");
    const inputText = document.getElementsByClassName("inputText");
        
    currentInput.checked = false;
    inputURL[0].style.display = "block";
    inputURL[1].style.display = "block";
    inputText[0].style.display = "none";
    inputText[1].style.display = "none";

    changeInputArea();
    expect(inputURL[0].style.display).toEqual("none");
    expect(inputURL[0].style.display).toEqual("none");
    expect(inputText[0].style.display).toEqual("block");
    expect(inputText[1].style.display).toEqual("block");    })
})