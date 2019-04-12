chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Cat intercepted: " + info.url);
    return {
      redirectUrl: chrome.runtime.getURL("daddy.html")
    };
  },
  // filters
  {
    urls: [
      "*://*.youtube.com/*"
    ]
  },
  // extraInfoSpec
  ["blocking"]);  