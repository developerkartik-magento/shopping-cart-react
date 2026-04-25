import Keycloak from 'keycloak-js';

// Keycloak configuration
const keycloakConfig = {
  url: 'http://localhost:8080', // Replace with your Keycloak server URL
  realm: 'your-realm', // Replace with your realm name
  clientId: 'your-client-id' // Replace with your client ID
};

// Initialize Keycloak
const keycloak = new Keycloak(keycloakConfig);

// Keycloak initialization options
const initOptions = {
  onLoad: 'check-sso', // Check SSO silently
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  checkLoginIframe: false
};

// Initialize Keycloak
keycloak.init(initOptions).then((authenticated) => {
  if (authenticated) {
    console.log('User is authenticated');
  } else {
    console.log('User is not authenticated');
  }
}).catch((error) => {
  console.error('Keycloak initialization failed', error);
});

// Export the keycloak instance for use in other parts of the app
export default keycloak;

// Helper functions
export const login = () => {
  keycloak.login();
};

export const logout = () => {
  keycloak.logout();
};

export const getToken = () => {
  return keycloak.token;
};

export const isAuthenticated = () => {
  return keycloak.authenticated;
};

export const updateToken = (minValidity = 5) => {
  return keycloak.updateToken(minValidity);
};