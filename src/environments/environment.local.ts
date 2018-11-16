export const environment = {
    production: false,
    envName: 'local',
    appUrl: 'http://localhost:5003/',
    apiUrl: 'http://localhost:5001/api/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
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
        '/profile'
    ],
    routesRequiringBackOfficeToken: [
        '/admin'
    ]
};
