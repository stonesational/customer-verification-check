({
    doM2Open : function(component, url, transactionId, params) {
        // Translate json params into query string params
        var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        url = url + "?=" + queryString;

        //Currently a SF bug with standard__webPage PageRef type so using window.open until it's fixed
        window.open(url, transactionId, "", false);

    },

    doCrvOpen : function(component, url, transactionId, params) {
        var workspaceAPI = component.find("workspace");
        
        //TODO: Change PageRef type to "standard__component" for component navigation. Using a Lightning Page for this example with no parameters
        var pageRef = {    
            "type": "standard__navItemPage",
            "attributes": {
                 "apiName": url
            }
        };
        workspaceAPI
            .getFocusedTabInfo()
            .then(function(response) {
                return workspaceAPI.openSubtab({
                    parentTabId: response.tabId,
                    pageReference: pageRef,
                    focus: true
                });
            })
            .then(function(subTabId) {
                $A.get("e.force:closeQuickAction").fire();
                workspaceAPI.focusTab({tabId : subTabId}); //being paranoid about focus
            });

    }
})
