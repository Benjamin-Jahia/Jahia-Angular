Dunno why

java.io.IOException: Resource not found, /var/jahia/patches/groovy/create-token.groovy
at org.jahia.bundles.provisioning.impl.operations.ProvisioningScriptUtil.getResource(ProvisioningScriptUtil.java:84) 

But 

INFO  [TokensServiceImpl] - New token generated TokenDetails{key='9201cd9b-4e62-415e-b523-e198dd7e4756', userId='/users/root', name='test-token12345',...
 
AND

INFO  [Patcher] - Found patch scripts file [/var/jahia/patches/groovy/create-token.groovy]. Executing...
ERROR [GroovyPatcher] - Execution of script failed with error: javax.script.ScriptException: java.lang.IllegalArgumentException: token already exists

Maybe should try with setResult("remove"); option, but seems like Jahia doesn't have rights on file to remove it :-/
Try to cp file in dir after container built but before startup ==> nope it looks that /var/jahia/patches/groovy directory is filled after jahia initalization, removing our file :-( 
Update groovy script to test token existance ?

Seeeeems OK !!! 
Just give ownership of script to tomcat, and put it in proper directory !