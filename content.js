// content.js
document.addEventListener('DOMContentLoaded', () => {
    // Observe the changes in the page for new ticket elements
    const targetNode = document.body;
    const config = { childList: true, subtree: true };
  
    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            // Look for ticket number text
            if (node.nodeType === Node.ELEMENT_NODE && node.textContent.includes('Open Ticket #')) {
              const ticketNumber = node.textContent.match(/Open Ticket #(\d+)/)[1];
              // Send ticket number to background script for clipboard copying
              chrome.runtime.sendMessage({ action: 'copyToClipboard', ticket: ticketNumber });
            }
          });
        }
      }
    };
  
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  });
  