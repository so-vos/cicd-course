## Assignment 4: Deploying

#### 4.1 Create a new repository to use for staging

1. Create a [GitHub Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) for your account for `public_repo` scope. Store the value in a good place, because you will need to use it later on.

2. Create a new public repository `cicd-workshop-staging` in your user/organization account to be used for staging deployment.
- Click on your profile icon on top right corner and open Your repositories
- Press New to create a new repository
- Provide the repo name as `cicd-workshop-staging`
- Ensure to choose Public
- Leave the rest of the options as default and click Create repository

3. Enable GitHub Pages settings for this repository.

- Go to `Settings` in your repository and click on `Pages`
- Please ensure that you have chosen a specific branch (gh-pages for instance) and /(root) folder. 
- Press save. 

#### 4.2 Continuous Delivery Workflow changes 

1. Go to the cicd-workshop-github-actions repository > Settings > Secrets > Actions
2. Create a new repository secret called TOKEN with the value from the PAT, which you created at the beginning of this excercise (section 4.1.1). 

#### 4.3 Deploying from the pipeline

1.  Create a new GitHub Actions workflow file next to the existing workflow to deploy the application to github pages. This should result in a workflow for building and a workflow for publishing.
2.  We will be using the [Deploy to GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages) action for deploying to GitHub pages in our new repository.
4.  Make sure the new workflow triggers on a push to the `main` branch.
5.  Define the step and configure the settings for publishing to the new repo:
    ```
    - name: Deploy 
      uses: JamesIves/github-pages-deploy-action@4.1.0
      with:
        branch: main # The branch the action should deploy to.
        folder: build # The folder the action should deploy.
        token: ${{ secrets.TOKEN }}
        repository-name: ${{ env.owner }}/${{ env.repo }}
    ```
6.  Trigger a few commits and verify successful deployments of the application to the new repository.

#### 4.4 Deploying from different branches

1. Just like in the exercise 4.1 step 2 create a new repository but called: `cicd-workshop-production`.
2. Change the workflow file to trigger a deployment to the `cicd-workshop-staging` repository when a push is made to the `develop` branch. 
3. Change the workflow to trigger a deployment to the `cicd-workshop-production` repository when a push is made to the `main` branch.

#### Further reading

- [Github Pages](https://pages.github.com)
- [Deploy to Github Pages](https://github.com/marketplace/actions/deploy-to-github-pages)
