// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    envName: 'local',
    appUrl: 'http://localhost:5003/',
    apiUrl: 'http://localhost:5001/api/',
    // idsUrl: 'http://localhost:5000/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    IPCheckingServiceUrl: 'https://freegeoip.net/json/',

    identityServerClientCredentials: {
        client_id: 'bgweb-app',
        client_secret: '8526cfb2-472b-4c40-b704-51d0dbf9edc3',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: 'bgweb-user',
        client_secret: '8eb2c29f-c0f9-4020-a165-aaf54333aba3t',
        scope: 'scope.bgapi',
        grant_type: 'password'
    },
    apiKey: 'still-waiting',
    routesRequiringUserToken: [
        '/dashboard',
        '/profile',
        '/admin'
    ]
};
