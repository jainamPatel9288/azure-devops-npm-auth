# azure-devops-npm-auth

Authenticate `npm` with Azure DevOps Artifacts using Microsoft Entra ID.
Replaces Personal Access Tokens with short-lived tokens that refresh automatically.

---

## Install

```bash
npm install -g @simptel/azure-devops-npm-auth
```

Requires Node.js 22.9.0+.

---

## Usage

First run (in a project with an Azure DevOps `.npmrc`):

```bash
azure-devops-npm-auth --tenant-id <tenant-id> --client-id <client-id>
```

Prints a device code, opens a browser to sign in, stores the session in your OS keychain, and writes a token to the npm user config file (`$npm_config_userconfig` if set, otherwise `~/.npmrc`).

After that, just run:

```bash
azure-devops-npm-auth
```

It silently refreshes the token from the cached session. Safe to run before every `npm install`.

You can also set `AZDO_TENANT_ID` and `AZDO_CLIENT_ID` instead of passing flags. Run `azure-devops-npm-auth --help` for all options.

---

## Features

- No PATs — uses Entra ID device code flow
- Tokens auto-refresh (~1h lifetime)
- Multi-registry support
- Credentials stored in OS keychain (Keychain / DPAPI / libsecret)

---

## Setup

An admin registers an Entra app once:

1. **App registrations → New registration** — single tenant, no redirect URI
2. **Authentication →** enable *Allow public client flows*
3. **API permissions → Add → Azure DevOps → Delegated →** `vso.packaging` (add `vso.packaging_write` for publishing)
4. **Grant admin consent**
5. Share the **Application (client) ID** and **Directory (tenant) ID** with developers

---

## License

MIT

Testing