
export const environment = {
	production: true,
	appUrl: 'https://baiganio.github.io/',
	apiUrl: 'https://bgapi.azurewebsites.net/api/',
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
	apiKey: 'still waiting...',
	routesRequiringUserToken: [
		'/dashboard',
		'/profile',
		// '/admin'
	]
};
