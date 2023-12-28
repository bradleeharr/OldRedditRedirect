chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url && /^https?:\/\/(www\.)?reddit\.com/.test(details.url)) {
        chrome.tabs.update(details.tabId, {url: details.url.replace('www.reddit.com', 'old.reddit.com')});
    }
}, {url: [{urlMatches : 'https://www.reddit.com/*'}]});
