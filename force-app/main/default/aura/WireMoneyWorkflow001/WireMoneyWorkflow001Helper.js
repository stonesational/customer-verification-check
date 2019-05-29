({
    /*	Callback handler for the authentication check. Options:
           1) Load a Visual Flow within the Quick Action modal (shown below)
           2) Load a Secondary tab with a Visual Flow or Component
    */
    authenticationResult : function(component, response) {
        if(response.state === "SUCCESS"){
            var flow = component.find("flowData");
            flow.startFlow("Wire_Transfer_001");

        } else if (response.state === "FAIL") {
            alert("Authentication Failed"); //TODO: Replace with Toast

        } else if (response.state === "BLOCK") {
            alert("Authentication Blocked"); //TODO: Replace with Toast

        } else {
            alert("ERROR: Something went wrong"); //TODO: Replace with Toast
        }
    }
})
