# GitHubActions

## Introduction

The repository contains implemented _GitHub Actions_, which are discussed as part of the engineering thesis. The main goal of the thesis is to discuss the use of _GitHub Actions_ in the development process. _Actions_ were created based on a simple _node.js_ application whose task is to sum natural numbers from 1 to 100.

## Implemented Actions

- **Sample Workflow** 

_Sample Workflow_ (pol. _Przykladowe workflow_) contains workflow whose task is to familiarize the recipient with the configuration and general operation of the action. The name of the file implementing this action is _konfiguracja.yml_. A detailed explanation of this workflow is included in subsection **2.2 Sample automation script** (pol. _Przykładowy skrypt automatyzacji_) of my engineering thesis.

- **Node.js CI**

_Node.js CI_ is a workflow that runs a unit test of an application. It is launched when files are updated in the repository (_push_) or when these changes are approved (_pull request_). The name of the file implementing this action is _testmodulowy.yml_. A detailed explanation of this workflow can be found in subsection **3.1. Using GitHub Actions in test automation** (pol. _Zastosowanie GitHub Actions w automatyzacji testów_).

- **Action for merging**

The GitHub Actions workflow called _Action for merging_, defined in the _merging.yml_ file, is designed to test the code before merging it to the main branch. This workflow is crucial to maintaining code quality as it ensures that all changes are tested before being committed to the main branch. A detailed explanation of this workflow can be found in subsection **3.1. Using GitHub Actions in test automation** (pol. _Zastosowanie GitHub Actions w automatyzacji testów_).

## Running App

As already said, the application calculates the sum of 100 natural numbers starting from 1. The sole purpose of this application is to illustrate how _GitHub Actions_ works. The application has no development use.

### Downloading the repo
1. Make sure you have **Node.js** installed on your computer. You can check this by typing `node -v` in the terminal or command line. If it is not installed, you can download and install it from the [Node.js official website](https://nodejs.org/en).
2. Make sure you have the **git** version control system installed. You can check this by typing `git --version` in the CLI. If it is not installed, you can download it [here](https://git-scm.com/downloads).
3. Create a new folder. Then go to it and right-click. From the context menu, select `Git Bash Here`.
4. In the open `git bash console`, type the following command `git pull https://gith ub.com/WiolaWysopal/GitHubActions.git` and click *Enter*.
5. The repository has been downloaded to your computer.

### Starting the app

1. Open a command line in the repository downloaded to your computer.
2. Install the necessary dependencies by typing `npm install` at the command line.
3. Finally, to run the application, use the `node index.js` command.
![The result of executing the node index.js command](image.png)
4. Open your browser and enter the address obtained after executing the command - in this case it is `http://127.0.0.1:3000`.
5. The running application has been opened in your browser.