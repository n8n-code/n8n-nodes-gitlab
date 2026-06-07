# @n8n-dev/n8n-nodes-gitlab

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-gitlab.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-gitlab)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing gitlab API integrations by hand.**

Every time you connect n8n to gitlab, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to gitlab took 5 minutes, not half a day?**

This node gives you **135+ resources** out of the box: **Award Emoji**, **Badges**, **Custom Attributes**, **Groups**, **Ldap**, and 130 more: with full CRUD operations, typed parameters, and zero manual configuration.

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

| Resource | Operations |
|----------|------------|
| Groups | POST Reset the runner registration token for the instance |
| Runners | POST Reset the runner registration token for the instance |
| Packages | GET Authenticate user against conan CLI, GET Check for valid user credentials per conan CLI, GET Ping the Conan API, POST NPM registry bulk advisory endpoint, POST NPM registry quick audit endpoint |
| Group Import And Export | POST Workhorse authorize the group import upload |
| Access Tokens | GET Retrieve a personal access token, DELETE Revoke a personal access token |
| Ci Jobs | GET Retrieve a job by job token |
| Applications | GET Get applications |
| Agents | GET List all GitLab agents for Kubernetes by job token |
| Ci Runners | GET Discover Job Router information |
| Internal Operations | POST Process Slack interaction events, POST Get Slack interactive component options |
| Usage Data | GET Get the latest ServicePing payload, GET Get Non SQL usage ping metrics, GET Get raw SQL queries for usage data SQL metrics |
| Users | GET Return the user specific counts |
| Instance | GET Get Api V 4 Application Appearance, GET Retrieve application statistics |
| Web Commits | GET Get the public key for web commits |
| Clusters | GET List all instance clusters |
| Container Registry | POST Receives notifications from the container registry when an operation occurs |
| Features | GET List all feature flags, GET List all feature flag definitions |
| Geo | GET Determine if a Geo site should proxy requests |
| Integrations | POST Process Slack interaction events, POST Get Slack interactive component options |
| Metadata | GET Retrieve metadata information for this GitLab instance, GET Retrieves version information for the GitLab instance |
| Project Import | POST Workhorse authorize the project import upload, POST Workhorse authorize the project relation import upload |

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

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
