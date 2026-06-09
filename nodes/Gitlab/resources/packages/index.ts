import type { INodeProperties } from 'n8n-workflow';

export const packagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Packages"
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
				},
				{
					"name": "Post API v4 Packages Npm Npm v1 Security Advisories Bulk",
					"value": "Post API v4 Packages Npm Npm v1 Security Advisories Bulk",
					"action": "NPM registry bulk advisory endpoint",
					"description": "This feature was introduced in GitLab 15.6",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/packages/npm/-/npm/v1/security/advisories/bulk"
						}
					}
				},
				{
					"name": "Post API v4 Packages Npm Npm v1 Security Audits Quick",
					"value": "Post API v4 Packages Npm Npm v1 Security Audits Quick",
					"action": "NPM registry quick audit endpoint",
					"description": "This feature was introduced in GitLab 15.6",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/packages/npm/-/npm/v1/security/audits/quick"
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
						"Packages"
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
						"Packages"
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
						"Packages"
					],
					"operation": [
						"Get API v4 Packages Conan v1 Ping"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v4/packages/npm/-/npm/v1/security/advisories/bulk",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Packages"
					],
					"operation": [
						"Post API v4 Packages Npm Npm v1 Security Advisories Bulk"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v4/packages/npm/-/npm/v1/security/audits/quick",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Packages"
					],
					"operation": [
						"Post API v4 Packages Npm Npm v1 Security Audits Quick"
					]
				}
			}
		},
];
