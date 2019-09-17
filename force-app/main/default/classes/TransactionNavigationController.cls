public with sharing class TransactionNavigationController {
   
    public TransactionNavigationController() {

    }

    @AuraEnabled(cacheable=true)
    public static Map<String,String> getTransactionUrl(String transactionId){
        //TODO: Replace with a lookup to Transaction Translation Matrix. Using dummy url for example

        Map<String,String> toReturn = new Map<String,String>();

        if(transactionId.equals('M2WorkflowExample00001')){
            toReturn.put('targetUrl','https://www.theonion.com');
            toReturn.put('targetSystem','M2');
            
        } else if(transactionId.equals('VisualFlowExample00001')){
            //TODO: Add URL to component or Lightning Page containing the component
            toReturn.put('targetUrl','Wire_Money_Example');
            toReturn.put('targetSystem','CRV');
        }
        else throw new AuraHandledException('Transaction ID not found: '+transactionId);

        return toReturn;

    }


}
