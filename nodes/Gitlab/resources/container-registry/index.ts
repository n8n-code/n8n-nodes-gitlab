import type { INodeProperties } from 'n8n-workflow';

export const containerRegistryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Container Registry"
					]
				}
			},
			"options": [
				{
					"name": "Post Api V 4 Container Registry Event Events",
					"value": "Post Api V 4 Container Registry Event Events",
					"action": "Receives notifications from the container registry when an operation occurs",
					"description": "This feature was introduced in GitLab 12.10",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/container_registry_event/events"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v4/container_registry_event/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Container Registry"
					],
					"operation": [
						"Post Api V 4 Container Registry Event Events"
					]
				}
			}
		},
];
