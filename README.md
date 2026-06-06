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
| Groups | Reset the runner registration token for the instance |
| Runners | Reset the runner registration token for the instance |
| Packages | Authenticate user against conan CLI, Check for valid user credentials per conan CLI, Ping the Conan API, NPM registry bulk advisory endpoint, NPM registry quick audit endpoint |
| Group Import And Export | Workhorse authorize the group import upload |
| Access Tokens | Retrieve a personal access token, Revoke a personal access token |
| Ci Jobs | Retrieve a job by job token |
| Applications | Get applications |
| Agents | List all GitLab agents for Kubernetes by job token |
| Ci Runners | Discover Job Router information |
| Internal Operations | Process Slack interaction events, Get Slack interactive component options |
| Usage Data | Get the latest ServicePing payload, Get Non SQL usage ping metrics, Get raw SQL queries for usage data SQL metrics |
| Users | Return the user specific counts |
| Instance | Get Api V 4 Application Appearance, Retrieve application statistics |
| Web Commits | Get the public key for web commits |
| Clusters | List all instance clusters |
| Container Registry | Receives notifications from the container registry when an operation occurs |
| Features | List all feature flags, List all feature flag definitions |
| Geo | Determine if a Geo site should proxy requests |
| Integrations | Process Slack interaction events, Get Slack interactive component options |
| Metadata | Retrieve metadata information for this GitLab instance, Retrieves version information for the GitLab instance |
| Project Import | Workhorse authorize the project import upload, Workhorse authorize the project relation import upload |

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
