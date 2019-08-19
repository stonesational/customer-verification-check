({
    /*	Checks if Customer is sufficient authenticated to complete the workflow
     *  The action to be taken based on the response contained within helper.authenticationResult callback
	 */
    doInit : function(component, event, helper) {
        var customerAuthenticator = component.find("customerAuthenticator");
        customerAuthenticator.doAuthentication( component,
                                                component.get("v.recordId"), 
                                                component.get("v.workflowId"), 
                                                helper.authenticationResult );

        
    }
})
