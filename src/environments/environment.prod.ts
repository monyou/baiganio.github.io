
export const environment = {
    production: true,
    appUrl: 'https://bgv1.azurewebsites.net',
    apiUrl: 'https://bgapi.azurewebsites.net/api/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    identityServerClientCredentials: {
        client_id: 'bgv1webapp-client',
        client_secret: '2179605b-35fb-46bd-b241-2f502229aa9a',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: 'bgv1webapp-user',
        client_secret: 'c9994578-08fd-4a77-81c4-12b4fce035bb',
        scope: 'scope.bgapi',
        grant_type: 'password'
    },
  apiKey: 'still waiting...',
  routesRequiringUserToken: [
    '/manage',
    '/account',
    '/dashboard',
    '/profile',
    '/admin'
  ]
};
