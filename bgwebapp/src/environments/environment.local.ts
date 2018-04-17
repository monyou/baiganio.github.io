export const environment = {
    production: false,
    envName: 'local',
    appUrl: 'http://localhost:5003/',
    apiUrl: 'http://localhost:5001/api/',
    // idsUrl: 'http://localhost:5000/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    IPCheckingServiceUrl: 'https://freegeoip.net/json/',

    identityServerClientCredentials: {
        client_id: 'bgwebapp-client',
        client_secret: '8526cfb2-472b-4c40-b704-51d0dbf9edc3',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: 'bgwebapp-user',
        client_secret: '8eb2c29f-c0f9-4020-a165-aaf54333aba3t',
        scope: 'scope.bgapi',
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
