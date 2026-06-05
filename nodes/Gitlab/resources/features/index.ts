import type { INodeProperties } from 'n8n-workflow';

export const featuresDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Features"
					]
				}
			},
			"options": [
				{
					"name": "Get Api V 4 Features",
					"value": "Get Api V 4 Features",
					"action": "List all feature flags",
					"description": "Lists all feature flags for the instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/features"
						}
					}
				},
				{
					"name": "Get Api V 4 Features Definitions",
					"value": "Get Api V 4 Features Definitions",
					"action": "List all feature flag definitions",
					"description": "Lists all feature flag definitions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/features/definitions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/features",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Features"
					],
					"operation": [
						"Get Api V 4 Features"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v4/features/definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Features"
					],
					"operation": [
						"Get Api V 4 Features Definitions"
					]
				}
			}
		},
];
