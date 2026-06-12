import type { INodeProperties } from 'n8n-workflow';

export const instanceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Instance"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Application Appearance",
					"value": "Get API v4 Application Appearance",
					"action": "Get API v4 Application Appearance",
					"description": "Get the current appearance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/application/appearance"
						}
					}
				},
				{
					"name": "Get API v4 Application Statistics",
					"value": "Get API v4 Application Statistics",
					"action": "Retrieve application statistics",
					"description": "Retrieves the current application statistics for this GitLab instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/application/statistics"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/application/appearance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance"
					],
					"operation": [
						"Get API v4 Application Appearance"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v4/application/statistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance"
					],
					"operation": [
						"Get API v4 Application Statistics"
					]
				}
			}
		},
];
