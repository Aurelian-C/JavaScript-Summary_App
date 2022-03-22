# Version control with Git

## Configure git and create a repository + .gitignore for specify folders/files that you don't want into your repository

- `git init`
- You need to have an account on Github or any other service that is similar to GitHub in order to store our local repository in the cloud.
- `git config` --global user.name GithubUsername
- `git config` --global user.email e-mailAdress

Before steps below we need to have in our directory created the .gitignore file. If VScode didn't create it automatically for you, then you need to create this file manually.

## Commit files to repository

- `git status`
- `git add -A`
- `git commit -m “commitMessage”`

## Restore a previous commit or restore a commit by ids

- `git log`

- `git reset --hard HEAD` or `git reset --hard idOfCommit`

## Create, switch and merge a branch

- `git branch` (list branch/s that you currently have)

- `git branch` nameOfBranch (create)

- `git checkout` nameOfBranch (switch)

- `git merge` nameOfBranch (merge)

## Share & update

- `git remote add origin https://github.com/GithubUsername/projectName.git`
  (with this code we let our local repository know about this https://github.com/GithubUsername/projectName.git remote repository)

- `git push origin [name of branch you want to push. ex: master]`
  (we can now push code to this remote branch, which remember is called "origin", and of course, you could give this “origin” another name, but "origin" is simply the standard name)

## Delete branch locally & remotely

- `git branch -d` localBranchName (delete branch locally)
- `git push origin --delete` remoteBranchName (delete branch remotely)
