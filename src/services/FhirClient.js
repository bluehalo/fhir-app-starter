import FHIR from 'fhirclient';

let loaded = false;
let client;

const connect = async () => {
  if (loaded) {
    return client;
  }
  return FHIR.oauth2.ready().then((smart) => {
    loaded = true;
    client = smart;
    return client;
  });
};

export default connect;
