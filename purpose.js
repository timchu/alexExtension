chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.action == "makeMessage"){
    document.getElementById('text').innerHTML = request.content;
  }
});
