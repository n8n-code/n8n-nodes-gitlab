import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GitlabApi implements ICredentialType {
	name = 'N8nDevGitlabApi';

	displayName = 'gitlab API';

	icon: Icon = { light: 'file:../nodes/Gitlab/gitlab.svg', dark: 'file:../nodes/Gitlab/gitlab.dark.svg' };

	documentationUrl = '';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'url',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://api.example.com',
			description: 'The base URL of your gitlab API server',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '/',
			method: 'GET',
		},
	};
}
