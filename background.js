function openmypage() {
    console.log("injecting");
    browser.tabs.create({
        "url": "index.html"
    });
}

browser.browserAction.onClicked.addListener(openmypage);