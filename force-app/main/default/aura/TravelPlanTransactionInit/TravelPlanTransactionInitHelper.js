({
    /*	Callback handler for the authentication check. Options:
           1) Call transactionNavigatinService.navigate() to allow for default navigation
           2) Call transactionNavigatinService.generateURL() to handle navigation uniquely
           
    */
   authenticationResult : function(component, response) {
        var transactionNavigatinService = component.find("transactionNavigatinService");
        var transactionId = component.get("v.transactionId");
        let queryStringPrameters = {foo: "bar"}; //In case any additional query string parameters are needed

        if(response.state === "SUCCESS"){
            /*  TODO: Insert parameters to Custom Object for use in ConnectedAppPlugin. Potentially with Lightning Data Services
                https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/data_service.htm
            */
            transactionNavigatinService.navigate(component, transactionId, queryStringPrameters); //TODO: make parameters optional
            $A.get("e.force:closeQuickAction").fire();

        } else if (response.state === "FAIL") {
            alert("Authentication Failed"); //TODO: Replace with Toast

        } else if (response.state === "BLOCK") {
            alert("Authentication Blocked"); //TODO: Replace with Toast

        } else {
            alert("ERROR: Something went wrong"); //TODO: Replace with Toast
        }
    }
})
