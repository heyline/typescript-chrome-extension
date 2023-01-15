import * as Sync from './sync/main'


let a = new Sync.SomeClass()

chrome.action.onClicked.addListener((tab) => {

    // a.init().then()
    a.upLoad().then()

})
