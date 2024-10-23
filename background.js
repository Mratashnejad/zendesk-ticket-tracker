// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'copyToClipboard') {
      // Create a temporary text area to copy to clipboard
      const tempInput = document.createElement('textarea');
      tempInput.value = `Open Ticket #${request.ticket}`;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
  
      console.log(`Copied: Open Ticket #${request.ticket} to clipboard`);
    }
  });
  