import type { INodeProperties } from 'n8n-workflow';

export const groupsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					]
				}
			},
			"options": [
				{
					"name": "Post API v4 Runners Reset Registration Token",
					"value": "Post API v4 Runners Reset Registration Token",
					"action": "Reset the runner registration token for the instance",
					"description": "Resets the runner registration token for the GitLab instance.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/runners/reset_registration_token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v4/runners/reset_registration_token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Post API v4 Runners Reset Registration Token"
					]
				}
			}
		},
];
