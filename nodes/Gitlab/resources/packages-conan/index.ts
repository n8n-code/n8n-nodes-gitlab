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
					"action": "Retrieve an authentication token",
					"description": "Retrieves an authentication token. Creates a JSON Web Token (JWT) for use as a Bearer header in other requests to the package registry.",
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
					"action": "Verify authentication credentials",
					"description": "Verifies authentication credentials for a Conan package registry.",
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
					"action": "Verify availability of a Conan repository",
					"description": "Verifies availability of a Conan repository.",
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
