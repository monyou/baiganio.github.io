// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
	production: false,
	envName: 'local',
	appUrl: 'http://localhost:5003/',
	apiUrl: 'http://localhost:8281/api/',
	idsUrl: 'http://localhost:5004/',
	backofficeUrl: 'http://localhost:9117/',

	IPCheckingServiceUrl: 'https://freegeoip.net/json/',

	identityServerCredentials: {
		client_id: 'bg-webapp-test',
		client_secret: 'bg-webapp-test-secret',
		scope: 'scope.bg-webapp-test',
		grant_type: 'client_credentials'
	},
	identityServerCredentialsUser: {
		client_id: 'webapp_user',
		client_secret: '',
		scope: 'ApiGateway',
		grant_type: 'password'
	}
};
