# shenv

CLI tool to create persistent environment variables for shell scripts

## Install

```sh
deno install -A -f -n shenv --location=https://github.com/kstdx/shenv https://raw.githubusercontent.com/kstdx/shenv/main/main.js
```

## Usage

**1. Get value from key**

```sh
shenv KEY_NAME
```

**2. Set value with key**

```sh
shenv --set --key=KEY_NAME --value="[value]"
```

**3. Remove value from key**

```sh
shenv --remove --key=KEY_NAME
```

**4. List all items**

```sh
shenv --list
```

## Examples

**Use with deployctl**

Set token:

```sh
shenv --set --key=DEPLOY_TOKEN --value="[token value]"
```

Deploy:

```sh
deployctl deploy --token=$(shenv DEPLOY_TOKEN) --project main.ts
```
