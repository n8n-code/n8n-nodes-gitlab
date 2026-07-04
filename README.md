# @n8n-dev/n8n-nodes-gitlab

![gitlab Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-gitlab.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-gitlab)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing gitlab API integrations by hand.**

Every time you connect n8n to gitlab, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to gitlab took 5 minutes, not half a day?**

This node gives you **147+ resources** out of the box: **Award Emoji**, **Badges**, **Custom Attributes**, **Groups**, **Ldap**, and 142 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-gitlab
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-gitlab`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **gitlab API** → paste your API key
3. Drag the **gitlab** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Groups</b> (1 operations)</summary>

- Post Reset the runner registration token for the instance

</details>

<details>
<summary><b>Runners</b> (1 operations)</summary>

- Post Reset the runner registration token for the instance

</details>

<details>
<summary><b>Group Import And Export</b> (1 operations)</summary>

- Post Workhorse authorize the group import upload

</details>

<details>
<summary><b>Packages Npm</b> (2 operations)</summary>

- Post NPM registry bulk advisory endpoint
- Post NPM registry quick audit endpoint

</details>

<details>
<summary><b>Access Tokens</b> (2 operations)</summary>

- Get Retrieve a personal access token
- Delete Revoke a personal access token

</details>

<details>
<summary><b>Ci Jobs</b> (1 operations)</summary>

- Get Retrieve a job by job token

</details>

<details>
<summary><b>Packages Conan</b> (3 operations)</summary>

- Get Authenticate user against conan CLI
- Get Check for valid user credentials per conan CLI
- Get Ping the Conan API

</details>

<details>
<summary><b>Applications</b> (1 operations)</summary>

- Get applications

</details>

<details>
<summary><b>Agents</b> (1 operations)</summary>

- Get List all GitLab agents for Kubernetes by job token

</details>

<details>
<summary><b>Ci Runners</b> (1 operations)</summary>

- Get Discover Job Router information

</details>

<details>
<summary><b>Internal Operations</b> (2 operations)</summary>

- Post Process Slack interaction events
- Post Get Slack interactive component options

</details>

<details>
<summary><b>Jira Forge Installation</b> (1 operations)</summary>

- Post Register the GitLab for Jira Forge system token for direct dev info sync

</details>

<details>
<summary><b>Jira Forge Subscriptions</b> (1 operations)</summary>

- Get List GitLab for Jira Forge namespace subscriptions

</details>

<details>
<summary><b>Usage Data</b> (3 operations)</summary>

- Get Retrieve Service Ping payload
- Get List all non SQL metrics
- Get List all Service Ping SQL queries

</details>

<details>
<summary><b>Users</b> (1 operations)</summary>

- Get Return the user specific counts

</details>

<details>
<summary><b>Instance</b> (2 operations)</summary>

- Get API v4 Application Appearance
- Get Retrieve application statistics

</details>

<details>
<summary><b>Web Commits</b> (1 operations)</summary>

- Get Retrieve the public signing key

</details>

<details>
<summary><b>Clusters</b> (1 operations)</summary>

- Get List all instance clusters

</details>

<details>
<summary><b>Container Registry</b> (1 operations)</summary>

- Post Receives notifications from the container registry when an operation occurs

</details>

<details>
<summary><b>Features</b> (2 operations)</summary>

- Get List all feature flags
- Get List all feature flag definitions

</details>

<details>
<summary><b>Geo</b> (1 operations)</summary>

- Get Determine if a Geo site should proxy requests

</details>

<details>
<summary><b>Integrations</b> (2 operations)</summary>

- Post Process Slack interaction events
- Post Get Slack interactive component options

</details>

<details>
<summary><b>Metadata</b> (2 operations)</summary>

- Get Retrieve metadata information for this GitLab instance
- Get Retrieves version information for the GitLab instance

</details>

<details>
<summary><b>Project Import</b> (2 operations)</summary>

- Post Workhorse authorize the project import upload
- Post Workhorse authorize the project relation import upload

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from gitlab docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official gitlab OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **gitlab** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the gitlab API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
