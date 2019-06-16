let sendText = document.getElementById("button");
chrome.commands.onCommand.addListener = function test() {
    console.log("works");
}
chrome.commands.onCommand.addListener(function callback)
sendText.onclick = function triggerText() {
    // console.log(document.getElementById("userinput").value);
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: "console.log('" + document.getElementById('userinput').value + "');"
            })
    })
}