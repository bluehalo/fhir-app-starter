# FHIR App Starter

This is a project starter for your next FHIR App. It is focused on Developer Experience, modern technologies, and best practices.

## Features

- React
- Redux
- Redux-Saga
- Semantic-UI
- Prettier

## Getting Started

## Launch from Cerner's Sandbox

1. Create an account on [Cerner's Code Sandbox](https://code.cerner.com/developer/smart-on-fhir/apps) and log in.

2. Create an application by clicking New App

   ![NewApp](./doc/NewApp.png)

   If you are just developing locally, use the following:

|      Config      | Example value                                 |
| :--------------: | --------------------------------------------- |
|     App Name     | Anything you want                             |
| SMART Launch URI | http://localhost:3000/launch.html             |
|   Redirect URI   | http://localhost:3000/                        |
|     App Type     | Provider                                      |
|    FHIR Spec     | DSTU2                                         |
|    Authorized    | Yes                                           |
|  Patient Scopes  | Patient.read Observation.read Condition.read  |
|   User Scopes    | Not needed unless your requirements need this |

2. Clone fhir-app-starter

   ```sh
   git clone https://github.com/zeevosec/fhir-app-starter
   cd fhir-app-starter
   ```

3. Update your app config

   The app builds the information into the application automatically. All you need to do is update the `config/smart.js` file.

   ```js
   // Update me!
   module.exports = {
     name: '',
     clientId: '', // Your clientId
     scope: '', // "patient/Patient.read,patient/Observation.read"
     iss: '', // Found on Cerner's Sandbox under "FHIR Spec: dstu2 - " <iss listed here> "
     redirectUri: '', // Your redirectUri
   };
   ```

4. Install and start


    ```sh
    yarn install
    yarn start
    ```

    You should see your browser open up your app.

    ![Unconnected](./doc/Unconnected.png)

    Notice the "Unconnected..." banner. This is because we have not launched from an EHR yet. Cerner's Code Sandbox allows us to launch the application in this exact way. Let's do that.

5.  Launch from Cerner's Code Sandbox

    On [Cerner's Code Sandbox](https://code.cerner.com/developer/smart-on-fhir/apps), click into your application. Select Begin Testing. Select a Patient, and Select Launch. After launching you may be redirected to a login page. Use username **portal** and password **portal**. If you configured things correctly, you should see your application has been launched properly.

    ![Success](./doc/Success.png)

## Inspiration

- react-boilerplate
- react-redux-saga-boilerplate
- create-react-app
