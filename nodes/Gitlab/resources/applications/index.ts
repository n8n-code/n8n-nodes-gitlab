import type { INodeProperties } from 'n8n-workflow';

export const applicationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Applications",
					"value": "Get API v4 Applications",
					"action": "Get applications",
					"description": "List all registered applications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/applications"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get API v4 Applications"
					]
				}
			}
		},
];
