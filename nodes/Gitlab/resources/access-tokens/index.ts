import type { INodeProperties } from 'n8n-workflow';

export const accessTokensDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Access Tokens"
					]
				}
			},
			"options": [
				{
					"name": "Get Api V 4 Personal Access Tokens Self",
					"value": "Get Api V 4 Personal Access Tokens Self",
					"action": "Retrieve a personal access token",
					"description": "Retrieves a specified personal access token by passing it to the API in a header.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/personal_access_tokens/self"
						}
					}
				},
				{
					"name": "Delete Api V 4 Personal Access Tokens Self",
					"value": "Delete Api V 4 Personal Access Tokens Self",
					"action": "Revoke a personal access token",
					"description": "Revokes a personal access token by passing it to the API in a header.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v4/personal_access_tokens/self"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/personal_access_tokens/self",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Tokens"
					],
					"operation": [
						"Get Api V 4 Personal Access Tokens Self"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v4/personal_access_tokens/self",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Tokens"
					],
					"operation": [
						"Delete Api V 4 Personal Access Tokens Self"
					]
				}
			}
		},
];
