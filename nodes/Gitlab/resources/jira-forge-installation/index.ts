import type { INodeProperties } from 'n8n-workflow';

export const jiraForgeInstallationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Jira Forge Installation"
					]
				}
			},
			"options": [
				{
					"name": "Post API v4 Integrations Jira Forge Installation Forge Token",
					"value": "Post API v4 Integrations Jira Forge Installation Forge Token",
					"action": "Register the GitLab for Jira (Forge) system token for direct dev-info sync",
					"description": "Stores the Forge app system OAuth token (X-Forge-Oauth-System header) and the Jira apiBaseUrl (from the FIT), so GitLab pushes dev-info directly to Jira. See Atlassian::Forge::SystemTokenClient.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v4/integrations/jira_forge/installation/forge_token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v4/integrations/jira_forge/installation/forge_token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jira Forge Installation"
					],
					"operation": [
						"Post API v4 Integrations Jira Forge Installation Forge Token"
					]
				}
			}
		},
];
