let color = 'grey';
chrome.runtime.onInstalled.addListener(()=> {
chrome.storage.sync.set({color});
console.log('Default background color set to %cwhite', `color: ${color}`);
});
