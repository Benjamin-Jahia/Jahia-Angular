# Start from Jahia basic Image
FROM jahia/jahia-ee:8.1.2.0
# Copy the groovy script to insert token in proper directory, giving Ownership to 'tomcat' ;-) 
COPY --chown=tomcat:tomcat ./provisioning/create-token.groovy /var/jahia/patches/groovy/create-token.groovy