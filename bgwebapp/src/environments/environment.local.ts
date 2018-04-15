export const environment = {
    production: false,
    envName: 'local',
    appUrl: 'http://localhost:5003/',
    apiUrl: 'http://localhost:5001/api/',
    // idsUrl: 'http://localhost:5000/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    IPCheckingServiceUrl: 'https://freegeoip.net/json/',

    identityServerClientCredentials: {
        client_id: 'bgapi-free',
        client_secret: 'bgapi-free-secret',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials'
    },
    // identityServerUserCredentials: {
    //     client_id: 'bgweb-user',
    //     client_secret: '8eb2c29f-c0f9-4020-a165-aaf54333aba3t',
    //     scope: 'scope.bgapi',
    //     grant_type: 'password'
    // },
    apiKey: 'still-waiting',
    routesRequiringUserToken: [
        '/dashboard',
        '/profile',
        '/admin'
    ]
};
