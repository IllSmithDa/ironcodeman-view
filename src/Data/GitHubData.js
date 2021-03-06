const GithubData = [
  { 
    type: "Git Intro",
    command: "git init",
    description: "sets current local directory as a Git Repository" 
  },
  {
    type: "Git Intro",
    command: "git clone git@github/username/repo.git",
    description: `clone the desired repository if it doesn't exist 
    locally on your computer. Make sure to also cd into your 
    cloned repository after.`
  },
  { 
    type: "Git Intro",
    command: "git checkout -b 'branchname'",
    description: `creates a new branch called 'branchname' and adding -b to the 
    command will switch to the new branch`
  },
  { 
    type: "Git Intro",
    command: "git add .",
    description: "adds files in local directory for commit" 
  },
  { 
    type: "Git Intro",
    command: "git commit -m 'Comment here'",
    description: "commits the files to be pushed to Github repository" 
  },
  { 
    type: "Git Intro",
    command: "git push origin master",
    description: "push files to the Github repo under the branch name 'master'" 
  },
  {
    type: "Git Remote",
    command: "git init",
    description: "init git to access git commands such as git remote"
  },
  {
    type: "Git Remote",
    command: "git remote add origin https://github.com/user/repo.git",
    description: "add a remote from a repository"
  }, 
  {
    type: "Git Remote",
    command: "git remote rm destination",
    description: "removes remote named 'destination'"
  }, 
  {
    type: "Git Remote",
    command: "git remote -v",
    description: "checks for the current remote"
  },
  {
    type: "Git Sync",
    command: "git clone git@github/username/repo.git",
    description: `clone the desired repository if it doesn't exist 
    locally on your computer. Make sure to also cd into your 
    cloned repository after.`
  },
  {
    type: "Git Sync",
    command: "git remote add upstream git@github/username/repo.git",
    description: `add the remote to the cloned repository if it doesn't 
    already exist. Use 'git remote -v' to check if remote exists`
  },
  {
    type: "Git Sync",
    command: "git fetch upstream",
    description: "Fetches all the upstreams that exist on your repository"
  },
  {
    type: "Git Sync",
    command: "git pull upstream master",
    description: "pulls and syncs your local project with the master branch"
  },
  { 
    type: "Git Intro",
    command: "git pull origin master --allow-unrelated-histories",
    description: `pulls and syncs your local project with the master branch and also 
    allowing you to merge even if the local and the git repo do not share git commit 
    history` 
  },
  {
    type: "Git Branch",
    command: "git checkout -b your_branch_name",
    description: `creates a new branch called newBranch and adding '-b' will switch you to 
    the new branch 'your_branch_name'.`
  },
  {
    type: "Git Branch",
    command: "git checkout your_branch_name",
    description: `Switches to the existing branch 'your_branch_name'.`
  },
  {
    type: "Git Remove",
    command: "git reset HEAD FileName",
    description: "undo a git add . for file called FileName"
  },
  {
    type: "Git Remove",
    command: "git reset --hard HEAD^",
    description: "Resets the current branch one commit backwards"
  },
  {
    type: "Git Remove",
    command: "git reset --hard HEAD",
    description: "Discards all local changes to the current branch"
  },
  {
    type: "Git Remove",
    command: "git branch -d branch_name",
    description: "Deletes the branch branch_name"
  },
];

export default GithubData;