// popup.js
document.getElementById('copy-ticket').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'copyToClipboard' });
  });
  