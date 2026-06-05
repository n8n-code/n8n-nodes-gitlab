import type { INodeProperties } from 'n8n-workflow';

export const metadataDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					]
				}
			},
			"options": [
				{
					"name": "Get Api V 4 Metadata",
					"value": "Get Api V 4 Metadata",
					"action": "Retrieve metadata information for this GitLab instance",
					"description": "Retrieves metadata information for the GitLab instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/metadata"
						}
					}
				},
				{
					"name": "Get Api V 4 Version",
					"value": "Get Api V 4 Version",
					"action": "Retrieves version information for the GitLab instance",
					"description": "This feature was introduced in GitLab 8.13 and deprecated in 15.5. We recommend you instead use the Metadata API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/version"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					],
					"operation": [
						"Get Api V 4 Metadata"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v4/version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					],
					"operation": [
						"Get Api V 4 Version"
					]
				}
			}
		},
];
