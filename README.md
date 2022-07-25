# [ADAPT Next Starter](https://github.com/SU-SWS/adapt-stripe)


Description
---

Netlify hosted, Next built, static form site for adapt-stripe.stanford.edu

## Installation

_Development_

```
cp example.env .env
* Manually find and add the `VAULT_ROLE_ID` and `VAULT_ROLE_ID` to .env
* Retrieve all environment variables from the vault
npm run vault:local
* Then fire up your development server using mext
npm run dev
```

## Vault

Vault source paths:
- 'secret/data/projects/adapt/[vault folder name]'
- 'secret/data/projects/adapt/saml'

Environment variables are stored (and versioned) in vault.stanford.edu. You can fetch them and have them written to `.env` by running `npm run vault`. You will need to add the vault role id and vault secret into the `.env` file first. You can likely find those values in the Netlify environment variables UI. If you can't find them. Please ask another developer.

The script that fetches the secrets is 'netlify-plugin-vault-variables'. It is exectued by running `npm run vault:local`.

When the script runs, it should only append new values to your `.env` file. This means you can have your own local environment variables or overwrite ones that are coming from vault. You can change this so that vault overwrite all values by setting the environment variable VAULT_OVERWRITE=true.

## Development Workflows

All general development work should be based off of the `dev` branch.
Branches should abide by the following branch name format: `{branch-type}/JIRA-###_optional-description-of-task`
where `branch-type` is `feature/`, `task/`, or `bug/` and `JIRA-###` corresponds with the Jira ticket number.
This will ensure that features get labeled and organized correctly in the release and connect to Jira appropriately.

- Create branch from `dev` following the above outlined branch naming conventions.
- Complete work in your branch.
- Create a pull request from your branch into `dev` branch. This will deploy a Netlify preview for your branch.
- On PR approval, **squash merge** your branch with the following merge commit message format: `JIRA-### | Brief description of work completed`.

Pull requests against dev will need to pass status checks for the following:
- lint
- test
- codeclimate
- Branch up to date with `dev`
- Netlify build/deploy preview

Pull requests merged into dev will kickoff a Netlify branch deploy for the `dev` branch.

## Release Workflow

To release code to production you will need to create a release branch from `dev` and make a pull request to `main`.
Including semver tags (`[major]`, `[minor]`, `[patch]`) will automatically add a semver label to the PR which will
determine how to increment semver during release. If no label is provided it will default to `patch`.

- Create branch from `dev` (or commit ref from `dev`) with `release/` prefix and optional semver tag (e.g. `release/completely-refactor-everything[major]`)
- Create a pull request from your `release/my-cool-release` branch into `main`
- On PR approval, do a standard **merge commit** into `main`

Merges to `main` will kickoff the following tasks:
- Semver version bump
- Publish github release
- Netlify production build and deploy
- Merge changes back into `dev`

## Hotfix Workflow

Hotfix workflows should only ever be used when there is a production bug that needs immediate attention and
there are changes in `dev` that are not ready for deployment.

- Create a `hotfix/` branch from `main`
- Complete the fix in your branch
- Create a pull request from your hotfix branch into `main`
- On PR approval, **squash merge** your branch with the following merge commit message format: `JIRA-### | Brief description of hotfix`.

Depending on the nature your hotfix and the history of `dev` you may need to to manually merge `main` back into `dev` to resolve merge conflicts.

### Codeclimate

To add codeclimate checks log in to codeclimate and add your repository with `dev` as the default branch.
Go the codeclimate repo settings and install the Github pull request status updates. Now go back to Github
and make sure `codeclimate` is added to required Status Checks for the `dev` branch protection settings.

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this module. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)

### Component Organization in This Repo

TODO