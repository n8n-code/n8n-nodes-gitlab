import type { INodeProperties } from 'n8n-workflow';

export const packagesNpmDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Packages Npm"
					]
				}
			},
			"options": [
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
						"Packages Npm"
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
						"Packages Npm"
					],
					"operation": [
						"Post API v4 Packages Npm Npm v1 Security Audits Quick"
					]
				}
			}
		},
];
