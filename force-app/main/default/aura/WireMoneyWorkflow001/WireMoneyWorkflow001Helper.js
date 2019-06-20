({
    /*	Callback handler for the authentication check. Options:
           1) Load a Visual Flow within the Quick Action modal (shown below)
           2) Load a Secondary tab with a Visual Flow or Component
    */
    authenticationResult : function(component, response) {
        var workspaceAPI = component.find("workspace");
        //var navService = component.find("navService");
        var WireMoneyFlowPageRef = {    
            "type": "standard__navItemPage",
            "attributes": {
                 "apiName": "Wire_Money_Example"    
            }
        };

        if(response.state === "SUCCESS"){
            workspaceAPI
                .getFocusedTabInfo()
                .then(function(response) {
                    return workspaceAPI.openSubtab({
                        parentTabId: response.tabId,
                        pageReference: WireMoneyFlowPageRef,
                        focus: true
                    });
                })
                .then(function(subTabId) {
                    $A.get("e.force:closeQuickAction").fire();
                    workspaceAPI.focusTab({tabId : subTabId}); 
                });

        } else if (response.state === "FAIL") {
            alert("Authentication Failed"); //TODO: Replace with Toast

        } else if (response.state === "BLOCK") {
            alert("Authentication Blocked"); //TODO: Replace with Toast

        } else {
            alert("ERROR: Something went wrong"); //TODO: Replace with Toast
        }
    }
})
