## Assignment 1: Committing

#### 1.1 Git Flow

First we will **fork** and **clone** the repository and create a couple of branches to facilitate a specific git workflow.

Use the command line where possible.
1.  From the GitHub interface fork the workshop repository to your own account.
2.  Clone your personal repository to your local machine
3.  Create a `develop` branch in your repository based on master.
4.  Push the branch back to GitHub.

We are first going to facilitate our desired Git Flow. Refer to `⚙ Settings > Branches` of your personal GitHub repository for setting the default branches.

4.  Mark branch `develop` as the default branch in your repository.
5.  Work from branch `develop` from now on in your local environment.


#### 1.2 Git Hooks (optional)

1.  Make sure the [.git](/.git) folder shows in your project file explorer. 
    If not, [configure IntelliJ to do so](/instructions/images/show-git-dir.png) by removing `.git` from the list of entries under _"Ignore files and folders"_.
2.  Create a hook that prevents you from pushing files directly on the `main` branch. Refer to the following links for more information:
    * https://githooks.com
    * https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks  
    
    Hint: you can retrieve the current branch name with `git rev-parse --abbrev-ref HEAD`
