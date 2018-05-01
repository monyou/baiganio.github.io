export const environment = {
    production: false,
    envName: 'local',
    appUrl: 'http://localhost:5003/',
    apiUrl: 'http://localhost:5001/api/',
    // idsUrl: 'http://localhost:5000/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    IPCheckingServiceUrl: 'http://ipinfo.io',

    identityServerClientCredentials: {
        client_id: 'bgweb_app',
        client_secret: '123',
        scope: 'scope.bgapi-free',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: 'bgweb_user',
        client_secret: '123',
        scope: 'scope.bgapi-free',
        grant_type: 'password'
    },
    apiKey: 'still-waiting',
    routesRequiringUserToken: [
        '/manage',
        '/account',
        '/dashboard',
        '/profile',
        '/admin'
    ]
};
