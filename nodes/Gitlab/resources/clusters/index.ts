import type { INodeProperties } from 'n8n-workflow';

export const clustersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Admin Clusters",
					"value": "Get API v4 Admin Clusters",
					"action": "List all instance clusters",
					"description": "Lists all instance clusters for the instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/admin/clusters"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/admin/clusters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Get API v4 Admin Clusters"
					]
				}
			}
		},
];
