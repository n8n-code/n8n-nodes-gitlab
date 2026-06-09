import type { INodeProperties } from 'n8n-workflow';

export const geoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Geo"
					]
				}
			},
			"options": [
				{
					"name": "Get API v4 Geo Proxy",
					"value": "Get API v4 Geo Proxy",
					"action": "Determine if a Geo site should proxy requests",
					"description": "Returns a Geo proxy response",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v4/geo/proxy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v4/geo/proxy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Geo"
					],
					"operation": [
						"Get API v4 Geo Proxy"
					]
				}
			}
		},
];
