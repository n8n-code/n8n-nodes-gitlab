import type { INodeProperties } from 'n8n-workflow';

export const usageDataDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Usage Data"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Usage Data Service Ping",
					"value": "Get API v4 Usage Data Service Ping",
					"action": "Get the latest ServicePing payload",
					"description": "Introduces in Gitlab 16.9. Requires personal access token with read_service_ping scope.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/usage_data/service_ping"
						}
					}
				},
				{
					"name": "Get API v4 Usage Data Non SQL Metrics",
					"value": "Get API v4 Usage Data Non SQL Metrics",
					"action": "Get Non SQL usage ping metrics",
					"description": "This feature was introduced in GitLab 13.11.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/usage_data/non_sql_metrics"
						}
					}
				},
				{
					"name": "Get API v4 Usage Data Queries",
					"value": "Get API v4 Usage Data Queries",
					"action": "Get raw SQL queries for usage data SQL metrics",
					"description": "This feature was introduced in GitLab 13.11.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/usage_data/queries"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/usage_data/service_ping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Usage Data"
					],
					"operation": [
						"Get API v4 Usage Data Service Ping"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v4/usage_data/non_sql_metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Usage Data"
					],
					"operation": [
						"Get API v4 Usage Data Non SQL Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v4/usage_data/queries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Usage Data"
					],
					"operation": [
						"Get API v4 Usage Data Queries"
					]
				}
			}
		},
];
