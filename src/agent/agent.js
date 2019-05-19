import { createConnection } from 'nforce';

const createInstance = () => createConnection({
    clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
    clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    redirectUri: process.env.REACT_APP_OAUTH_URL,
});

export const auth = () => createInstance()
    .authenticate({
        username: process.env.REACT_APP_OAUTH_USERNAME, 
        password: process.env.REACT_APP_OAUTH_PASSWORD
    })
    .then(resp => console.log(resp)).catch(err => console.log(err))