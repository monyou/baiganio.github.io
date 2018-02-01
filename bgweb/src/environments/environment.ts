// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
production: false,
appUrl: 'https://baiganio.github.io/',
apiUrl: 'https://bgapi.azurewebsites.net/api/',
idsUrl: 'https://ids4core20.azurewebsites.net/',
IPCheckingServiceUrl: 'https://freegeoip.net/json/',
identityServerCredentials: {
client_id: '',
client_secret: '',
scope: '',
grant_type: ''
},
identityServerCredentialsUser: {
client_id: '',
client_secret: '',
scope: '',
grant_type: ''
}
};
