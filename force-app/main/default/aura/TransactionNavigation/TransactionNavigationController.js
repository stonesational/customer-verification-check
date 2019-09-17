({
    navigate : function(component, event, helper) {
        
        let transactionId = event.getParam("arguments").transactionId;

        /*  Use the Transaction ID to ge the Target System URL from TTM
            There's a Helper method for each Target System so launch can be unique.
        */
        var action = component.get("c.getTransactionUrl");
        action.setParams({ transactionId :transactionId });
        action.setCallback(this, function(response) {
            
            if (response.getState() === "SUCCESS") {
                
                let targetSystem = response.getReturnValue().targetSystem;
                let targetUrl = response.getReturnValue().targetUrl;
                
                if( targetSystem === "M2" ) helper.doM2Open(component, targetUrl, transactionId, event.getParam("arguments").params);

                else if( targetSystem === "CRV" ) helper.doCrvOpen(component, targetUrl, transactionId, event.getParam("arguments").params);

                else alert("Errors: Unexpected target system: " + targetSystem);

            } else alert("Error Occurred calling TransactionNavigationController.getTransactionUrl() for transactionID: " + transactionId);
        });
        $A.enqueueAction(action);
    }
})
