import * as Sync from './sync/sunc';

let a = new Sync.SomeClass()

chrome.action.onClicked.addListener((tab) => {
    console.log(a.getName())

});


// let active = false;
//
// function makeOrange(color: string): void {
//     document.body.style.backgroundColor = color;
// }
//
// chrome.action.onClicked.addListener((tab) => {
//     active = !active;
//     const color = active ? 'orange' : 'white';
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id ? tab.id : -1},
//         func: makeOrange,
//         args: [color]
//     }).then();
// });
