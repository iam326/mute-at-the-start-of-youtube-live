chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  chrome.tabs.executeScript(null, { file: 'index.js' });
});
