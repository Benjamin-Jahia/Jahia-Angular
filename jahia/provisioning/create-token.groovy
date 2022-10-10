setResult("remove");
org.jahia.services.content.JCRTemplate.getInstance().doExecuteWithSystemSession({ session ->
    org.jahia.osgi.BundleUtils.getOsgiService("org.jahia.modules.apitokens.TokenService")
        .tokenBuilder("/users/root", "test-token12345", session)
        .setToken("W3y+OPQ4SS+vUPQCsTL2jSnQB+xEbTQQAfOQxXyBLZk=")
        .setActive(true)
        .setExpirationDate(new org.joda.time.DateTime('2025-12-31').toCalendar(Locale.getDefault()))
        .create()
    session.save();
})