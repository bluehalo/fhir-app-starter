module.exports = {
  description: 'FHIR App Starter',
  clientId: '4d20d09d-f3c6-4baf-a8d9-fddc67975245', // Make sure to set your environment up correctly when starting/building
  scope: 'patient/Patient.read patient/Condition.read',
  iss: 'https://fhir-ehr.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca',
  redirectUri: 'http://localhost:3000/',
};
