# README for Philips AC2889/10 Air Purifier Frontend

This is the frontend project associated with the backend, which can be found [here](https://github.com/rgee-de/air-purifier-api). It communicates with the backend via WebSocket and REST API. The frontend is designed to run in a Docker container for
easy deployment.

## Table of Contents

- [Requirements](#requirements)
- [Setup and Configuration](#setup-and-configuration)
  - [Environment Variables](#environment-variables)
  - [Running the Docker Container](#running-the-docker-container)
    - [PowerShell Script](#powershell-script)
    - [Bash Script](#bash-script)
  - [Running the Application](#running-the-application)
- [Angular CLI](#angular-cli)
  - [Development Server](#development-server)
  - [Code Scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running Unit Tests](#running-unit-tests)
  - [Running End-to-End Tests](#running-end-to-end-tests)
  - [Further Help](#further-help)

## Requirements

- Node 18 or higher
- Docker

## Setup and Configuration
### Environment Variables

Change the environment.*.ts files in _src/environments_ directory to configure the backend URL.

- production: Flag to set build to production,
- wsEndpoint: Backend Websocket-Endpoint e.g.: 'ws://192.168.20.47:8000/ws', 
- apiEndpoint: Backend API-Endpoint

### Running the Docker Container

To deploy the backend in a Docker container, use the provided scripts.

#### PowerShell Script

Run the following command in PowerShell to deploy the container:

```powershell
cd scripts
.\deploy-container.ps1
```

#### Bash Script

Run the following command in a Unix-like terminal to deploy the container:

```shell
cd scripts
.\deploy-container.sh
```

### Running the Application

To run the application locally without Docker, follow these steps:

1. Install the NPM packages:
    ```shell
    yarn
    ```

2. Start the Angular CLI Server:
    ```shell
    ng serve
    ```

3. Navigate to localhost:4200

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
