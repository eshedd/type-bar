// console.log("background runnings");
//
// chrome.browserAction.onClicked.addListener(buttonClicked)
//
// function buttonClicked(tab) {
//
// }
function setup() {
    let userinput = select('#userinput');
    userinput.input(inputText);
}

function inputText() {

    function gotTab() {
        //send message to content script
        let message = userinput.value();
        let msg = {
            txt: "hello"
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}