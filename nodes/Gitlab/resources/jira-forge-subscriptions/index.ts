import type { INodeProperties } from 'n8n-workflow';

export const jiraForgeSubscriptionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Jira Forge Subscriptions"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Integrations Jira Forge Subscriptions",
					"value": "Get API v4 Integrations Jira Forge Subscriptions",
					"action": "List GitLab for Jira (Forge) namespace subscriptions",
					"description": "Lists the GitLab namespaces subscribed to the Forge installation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/integrations/jira_forge/subscriptions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/integrations/jira_forge/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jira Forge Subscriptions"
					],
					"operation": [
						"Get API v4 Integrations Jira Forge Subscriptions"
					]
				}
			}
		},
];
