import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 User Counts",
					"value": "Get API v4 User Counts",
					"action": "Return the user specific counts",
					"description": "Assigned open issues, assigned MRs and pending todos count",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/user_counts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/user_counts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get API v4 User Counts"
					]
				}
			}
		},
];
