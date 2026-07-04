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
					"action": "Retrieve Service Ping payload",
					"description": "Retrieves the Service Ping payload from the application cache as JSON. If no cached payload is available, returns an empty response. Requires a personal access token with the `read_service_ping` scope. Introduced in GitLab 16.9.",
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
					"action": "List all non-SQL metrics",
					"description": "Lists all non-SQL metrics data used in the Service ping. This action is behind the `usage_data_non_sql_metrics` feature flag. Administrators only.",
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
					"action": "List all Service Ping SQL queries",
					"description": "Lists all raw SQL queries used to compute Service Ping. This action is behind the `usage_data_queries_api` feature flag. Administrators only.",
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
