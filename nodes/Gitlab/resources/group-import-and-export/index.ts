import type { INodeProperties } from 'n8n-workflow';

export const groupImportAndExportDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Group Import And Export"
					]
				}
			},
			"options": [
				{
					"name": "Post API v4 Groups Import Authorize",
					"value": "Post API v4 Groups Import Authorize",
					"action": "Workhorse authorize the group import upload",
					"description": "This feature was introduced in GitLab 12.8",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/groups/import/authorize"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v4/groups/import/authorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Import And Export"
					],
					"operation": [
						"Post API v4 Groups Import Authorize"
					]
				}
			}
		},
];
