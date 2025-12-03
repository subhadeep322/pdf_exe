document.getElementById("downloadBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // 1. Inject Auto-Scroller to load all images (Crucial for large books)
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: autoScrollAndPrint
  });
});

function autoScrollAndPrint() {
  // Create a overlay to tell user what's happening
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);color:white;z-index:9999;display:flex;justify-content:center;align-items:center;font-size:24px;';
  overlay.innerText = 'Scrolling to load all pages... Please wait...';
  document.body.appendChild(overlay);

  let totalHeight = 0;
  let distance = 100;
  let timer = setInterval(() => {
    let scrollHeight = document.body.scrollHeight;
    window.scrollBy(0, distance);
    totalHeight += distance;

    // Once we hit the bottom
    if(totalHeight >= scrollHeight){
      clearInterval(timer);
      overlay.innerText = 'Loading complete. Opening Print Dialog...';
      
      // Wait 2 seconds for last images to render
      setTimeout(() => {
        document.body.removeChild(overlay);
        window.print(); 
      }, 2000);
    }
  }, 20); // Fast scroll
}