import type { INodeProperties } from 'n8n-workflow';

export const packagesConanDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Packages Conan"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Packages Conan v1 Users Authenticate",
					"value": "Get API v4 Packages Conan v1 Users Authenticate",
					"action": "Authenticate user against conan CLI",
					"description": "This feature was introduced in GitLab 12.2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/packages/conan/v1/users/authenticate"
						}
					}
				},
				{
					"name": "Get API v4 Packages Conan v1 Users Check Credentials",
					"value": "Get API v4 Packages Conan v1 Users Check Credentials",
					"action": "Check for valid user credentials per conan CLI",
					"description": "This feature was introduced in GitLab 12.4",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/packages/conan/v1/users/check_credentials"
						}
					}
				},
				{
					"name": "Get API v4 Packages Conan v1 Ping",
					"value": "Get API v4 Packages Conan v1 Ping",
					"action": "Ping the Conan API",
					"description": "This feature was introduced in GitLab 12.2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/packages/conan/v1/ping"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/packages/conan/v1/users/authenticate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Packages Conan"
					],
					"operation": [
						"Get API v4 Packages Conan v1 Users Authenticate"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v4/packages/conan/v1/users/check_credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Packages Conan"
					],
					"operation": [
						"Get API v4 Packages Conan v1 Users Check Credentials"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v4/packages/conan/v1/ping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Packages Conan"
					],
					"operation": [
						"Get API v4 Packages Conan v1 Ping"
					]
				}
			}
		},
];
