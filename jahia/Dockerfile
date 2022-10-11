# Start from Jahia basic Image
FROM jahia/jahia-ee:8.1.2.0
# Copy the groovy script to insert token in proper directory, giving Ownership to 'tomcat' ;-) 
COPY --chown=tomcat:tomcat ./provisioning/create-token.groovy /var/jahia/patches/groovy/create-token.groovy
# Copy the graphql authorization
COPY --chown=tomcat:tomcat ./provisioning/org.jahia.bundles.api.authorization-myapp.yml /var/jahia/karaf/etc/org.jahia.bundles.api.authorization-myapp.yml
# Copy the provisioning file to be executed by container
COPY --chown=tomcat:tomcat ./provisioning/provisioning.yaml /var/jahia/tmp/provisioning.yaml