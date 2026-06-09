import type { INodeProperties } from 'n8n-workflow';

export const ciRunnersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Ci Runners"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Runners Router Discovery",
					"value": "Get API v4 Runners Router Discovery",
					"action": "Discover Job Router information",
					"description": "Discovers Job Router information for a runner. You must provide a valid runner authentication token.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/runners/router/discovery"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/runners/router/discovery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ci Runners"
					],
					"operation": [
						"Get API v4 Runners Router Discovery"
					]
				}
			}
		},
];
