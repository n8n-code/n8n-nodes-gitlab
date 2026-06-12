import type { INodeProperties } from 'n8n-workflow';

export const integrationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					]
				}
			},
			"options": [
				{
					"name": "Post API v4 Integrations Slack Interactions",
					"value": "Post API v4 Integrations Slack Interactions",
					"action": "Process Slack interaction events",
					"description": "Processes interaction events from Slack",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/integrations/slack/interactions"
						}
					}
				},
				{
					"name": "Post API v4 Integrations Slack Options",
					"value": "Post API v4 Integrations Slack Options",
					"action": "Get Slack interactive component options",
					"description": "Retrieves options for Slack interactive components",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/integrations/slack/options"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v4/integrations/slack/interactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Post API v4 Integrations Slack Interactions"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v4/integrations/slack/options",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Post API v4 Integrations Slack Options"
					]
				}
			}
		},
];
