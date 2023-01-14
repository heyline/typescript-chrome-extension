import * as Sync from './sync/sunc';

let a = new Sync.SomeClass()

chrome.action.onClicked.addListener((tab) => {
    console.log(a.getName())

})
