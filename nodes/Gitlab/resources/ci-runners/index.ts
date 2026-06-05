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
					"name": "Get Api V 4 Runners Router Discovery",
					"value": "Get Api V 4 Runners Router Discovery",
					"action": "Discover Job Router information",
					"description": "This endpoint can be used by the runner to retrieve information about the Job Router.",
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
						"Get Api V 4 Runners Router Discovery"
					]
				}
			}
		},
];
