import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { groupsDescription } from './resources/groups';
import { runnersDescription } from './resources/runners';
import { packagesDescription } from './resources/packages';
import { groupImportAndExportDescription } from './resources/group-import-and-export';
import { accessTokensDescription } from './resources/access-tokens';
import { ciJobsDescription } from './resources/ci-jobs';
import { applicationsDescription } from './resources/applications';
import { agentsDescription } from './resources/agents';
import { ciRunnersDescription } from './resources/ci-runners';
import { internalOperationsDescription } from './resources/internal-operations';
import { usageDataDescription } from './resources/usage-data';
import { usersDescription } from './resources/users';
import { instanceDescription } from './resources/instance';
import { webCommitsDescription } from './resources/web-commits';
import { clustersDescription } from './resources/clusters';
import { containerRegistryDescription } from './resources/container-registry';
import { featuresDescription } from './resources/features';
import { geoDescription } from './resources/geo';
import { integrationsDescription } from './resources/integrations';
import { metadataDescription } from './resources/metadata';
import { projectImportDescription } from './resources/project-import';

export class Gitlab implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'gitlab',
		name: 'N8nDevGitlab',
		icon: { light: 'file:./gitlab.svg', dark: 'file:./gitlab.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'GitLab DevOps platform',
		defaults: { name: 'gitlab' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevGitlabApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Groups",
					"value": "Groups",
					"description": "Operations about groups"
				},
				{
					"name": "Runners",
					"value": "Runners",
					"description": "Operations about runners"
				},
				{
					"name": "Packages",
					"value": "Packages",
					"description": "Operations about packages"
				},
				{
					"name": "Group Import And Export",
					"value": "Group Import And Export",
					"description": "Operations about group_import_and_exports"
				},
				{
					"name": "Access Tokens",
					"value": "Access Tokens",
					"description": "Operations about access_tokens"
				},
				{
					"name": "Ci Jobs",
					"value": "Ci Jobs",
					"description": "Operations about ci_jobs"
				},
				{
					"name": "Applications",
					"value": "Applications",
					"description": "Operations about applications"
				},
				{
					"name": "Agents",
					"value": "Agents",
					"description": "Operations about agents"
				},
				{
					"name": "Ci Runners",
					"value": "Ci Runners",
					"description": "Operations about ci_runners"
				},
				{
					"name": "Internal Operations",
					"value": "Internal Operations",
					"description": "Operations about internal_operations"
				},
				{
					"name": "Usage Data",
					"value": "Usage Data",
					"description": "Operations about usage_data"
				},
				{
					"name": "Users",
					"value": "Users",
					"description": "Operations about users"
				},
				{
					"name": "Instance",
					"value": "Instance",
					"description": "Operations about instances"
				},
				{
					"name": "Web Commits",
					"value": "Web Commits",
					"description": "Operations about web_commits"
				},
				{
					"name": "Clusters",
					"value": "Clusters",
					"description": "Operations related to clusters"
				},
				{
					"name": "Container Registry",
					"value": "Container Registry",
					"description": "Operations related to container registry"
				},
				{
					"name": "Features",
					"value": "Features",
					"description": "Operations related to managing Flipper-based feature flags"
				},
				{
					"name": "Geo",
					"value": "Geo",
					"description": "Operations related to Geo"
				},
				{
					"name": "Integrations",
					"value": "Integrations",
					"description": "Operations related to integrations"
				},
				{
					"name": "Metadata",
					"value": "Metadata",
					"description": "Operations related to metadata of the GitLab instance"
				},
				{
					"name": "Project Import",
					"value": "Project Import",
					"description": "Operations related to importing projects"
				}
			],
			"default": ""
		},
		...groupsDescription,
		...runnersDescription,
		...packagesDescription,
		...groupImportAndExportDescription,
		...accessTokensDescription,
		...ciJobsDescription,
		...applicationsDescription,
		...agentsDescription,
		...ciRunnersDescription,
		...internalOperationsDescription,
		...usageDataDescription,
		...usersDescription,
		...instanceDescription,
		...webCommitsDescription,
		...clustersDescription,
		...containerRegistryDescription,
		...featuresDescription,
		...geoDescription,
		...integrationsDescription,
		...metadataDescription,
		...projectImportDescription
		],
	};
}
