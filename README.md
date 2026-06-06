# @n8n-dev/n8n-nodes-gitlab

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-gitlab.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-gitlab)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing gitlab API integrations by hand.**

Every time you connect n8n to gitlab, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if your n8n node just... worked?**

This node gives you **135+ resources** out of the box: **Award Emoji**, **Badges**, **Custom Attributes**, **Groups**, **Ldap**, and 130 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **135+ resources**: **Award Emoji**, **Badges**, **Custom Attributes**, **Groups**, **Ldap**, and 130 more
- **Full CRUD**: Create, Read, Update, Delete operations for every resource
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

| Resource | Operations |
|----------|------------|
| Award Emoji | — |
| Badges | — |
| Custom Attributes | — |
| Groups | Post Api V 4 Runners Reset Registration Token |
| Ldap | — |
| Audit Events | — |
| Keys | — |
| Runners | Post Api V 4 Runners Reset Registration Token |
| Packages | Get Api V 4 Packages Conan V 1 Users Authenticate, Get Api V 4 Packages Conan V 1 Users Check Credentials, Get Api V 4 Packages Conan V 1 Ping, Post Api V 4 Packages Npm Npm V 1 Security Advisories Bulk, Post Api V 4 Packages Npm Npm V 1 Security Audits Quick |
| Deploy Resources | — |
| Avatars | — |
| Group Import And Export | Post Api V 4 Groups Import Authorize |
| Invitations | — |
| Members | — |
| Access Tokens | Get Api V 4 Personal Access Tokens Self, Delete Api V 4 Personal Access Tokens Self |
| Search | — |
| Wikis | — |
| Alert Management | — |
| Branches | — |
| Ci Catalog | — |
| Job Artifacts | — |
| Ci Jobs | Get Api V 4 Job |
| Secure Files | — |
| Pipelines | — |
| Pipeline Schedules | — |
| Ci Triggers | — |
| Commits | — |
| Commit Statuses | — |
| Draft Notes | — |
| Error Tracking | — |
| Files | — |
| Issues | — |
| Metric Images | — |
| Merge Request Approvals | — |
| Gitlab Pages | — |
| Events | — |
| Hooks | — |
| Projects Job Token Scope | — |
| Project Snapshots | — |
| Snippets | — |
| Project Templates | — |
| Protected Branches | — |
| Protected Tags | — |
| Remote Mirrors | — |
| Repositories | — |
| Resource Events | — |
| Submodules | — |
| Attestations | — |
| Tags | — |
| Terraform | — |
| Batched Background Migrations | — |
| Batched Background Operations | — |
| Database Dictionary | — |
| Migrations | — |
| Broadcast Messages | — |
| Applications | Get Api V 4 Applications |
| Imports | — |
| Agents | Get Api V 4 Job Allowed Agents |
| Ci Runners | Get Api V 4 Runners Router Discovery |
| Jobs | — |
| Glql | — |
| Internal Operations | Post Api V 4 Integrations Slack Interactions, Post Api V 4 Integrations Slack Options |
| Markdown | — |
| Namespaces | — |
| Offline Transfers | — |
| Organizations | — |
| Unleash | — |
| Usage Data | Get Api V 4 Usage Data Service Ping, Get Api V 4 Usage Data Non Sql Metrics, Get Api V 4 Usage Data Queries |
| Metrics | — |
| Users | Get Api V 4 User Counts |
| Instance | Get Api V 4 Application Appearance, Get Api V 4 Application Statistics |
| Project Topics | — |
| Web Commits | Get Api V 4 Web Commits Public Key |
| Access Requests | — |
| Ci Lint | — |
| Ci Resource Groups | — |
| Ci Variables | — |
| Cluster Agents | — |
| Clusters | Get Api V 4 Admin Clusters |
| Composer Packages | — |
| Conan Packages | — |
| Container Registry | Post Api V 4 Container Registry Event Events |
| Container Registry Event | — |
| Debian Distribution | — |
| Debian Packages | — |
| Dependency Proxy | — |
| Deploy Keys | — |
| Deploy Tokens | — |
| Deployments | — |
| Dora Metrics | — |
| Environments | — |
| Error Tracking Client Keys | — |
| Error Tracking Project Settings | — |
| Feature Flags User Lists | — |
| Feature Flags | — |
| Features | Get Api V 4 Features, Get Api V 4 Features Definitions |
| Freeze Periods | — |
| Generic Packages | — |
| Geo | Get Api V 4 Geo Proxy |
| Geo Nodes | — |
| Go Proxy | — |
| Group Export | — |
| Group Import | — |
| Group Packages | — |
| Helm Packages | — |
| Integrations | Post Api V 4 Integrations Slack Interactions, Post Api V 4 Integrations Slack Options |
| Issue Links | — |
| Jira Connect Subscriptions | — |
| Maven Packages | — |
| Merge Requests | — |
| Metadata | Get Api V 4 Metadata, Get Api V 4 Version |
| Ml Model Registry | — |
| Npm Packages | — |
| Nuget Packages | — |
| Package Files | — |
| Plan Limits | — |
| Project Export | — |
| Project Hooks | — |
| Project Import | Post Api V 4 Projects Import Authorize, Post Api V 4 Projects Import Relation Authorize |
| Project Import Bitbucket | — |
| Project Import Github | — |
| Project Packages | — |
| Projects | — |
| Protected Environments | — |
| Pypi Packages | — |
| Release Links | — |
| Releases | — |
| Resource Milestone Events | — |
| Rpm Packages | — |
| Rubygem Packages | — |
| Suggestions | — |
| System Hooks | — |
| Terraform State | — |
| Terraform Registry | — |
| Unleash Api | — |

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
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate).

When the gitlab API updates, this node updates too.

---

## Support This Project

This node was built by one developer who wanted to make n8n + OpenAPI effortless for everyone.

Your donation funds new features, more API support, and better tooling for every developer after you.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/kelvinzer0)
