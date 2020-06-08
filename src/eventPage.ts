

var contextMenuItem = {
    "id"  : "textTube" , 
    "title"  : "Copy to Text Tube" , 
    "contexts" : ["selection"] , 

};  

chrome.contextMenus.removeAll(()=>{
    chrome.contextMenus.create(contextMenuItem);
})

chrome.contextMenus.onClicked.addListener((data)=>{
    if(data.menuItemId == "textTube" && data.selectionText){
        chrome.storage.sync.get(["tube"] , (text)=>{
            const new_text = data.selectionText;
            const added = text.tube + new_text;
            chrome.storage.sync.set({"tube" : added});
        })
    }
})