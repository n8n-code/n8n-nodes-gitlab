import type { INodeProperties } from 'n8n-workflow';

export const agentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Job Allowed Agents",
					"value": "Get API v4 Job Allowed Agents",
					"action": "List all GitLab agents for Kubernetes by job token",
					"description": "Lists all GitLab agents for Kubernetes with a specified `CI_JOB_TOKEN`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/job/allowed_agents"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/job/allowed_agents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Get API v4 Job Allowed Agents"
					]
				}
			}
		},
];
