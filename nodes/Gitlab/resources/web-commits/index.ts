import type { INodeProperties } from 'n8n-workflow';

export const webCommitsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Web Commits"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Web Commits Public Key",
					"value": "Get API v4 Web Commits Public Key",
					"action": "Get the public key for web commits",
					"description": "This feature was introduced in GitLab 17.4.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/web_commits/public_key"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/web_commits/public_key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Web Commits"
					],
					"operation": [
						"Get API v4 Web Commits Public Key"
					]
				}
			}
		},
];
