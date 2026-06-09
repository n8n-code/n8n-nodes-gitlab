import type { INodeProperties } from 'n8n-workflow';

export const projectImportDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project Import"
					]
				}
			},
			"options": [
				{
					"name": "Post API v4 Projects Import Authorize",
					"value": "Post API v4 Projects Import Authorize",
					"action": "Workhorse authorize the project import upload",
					"description": "This feature was introduced in GitLab 12.9",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/projects/import/authorize"
						}
					}
				},
				{
					"name": "Post API v4 Projects Import Relation Authorize",
					"value": "Post API v4 Projects Import Relation Authorize",
					"action": "Workhorse authorize the project relation import upload",
					"description": "This feature was introduced in GitLab 16.11",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/projects/import-relation/authorize"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v4/projects/import/authorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Import"
					],
					"operation": [
						"Post API v4 Projects Import Authorize"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v4/projects/import-relation/authorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Import"
					],
					"operation": [
						"Post API v4 Projects Import Relation Authorize"
					]
				}
			}
		},
];
