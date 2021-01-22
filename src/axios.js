import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://us-central1-clone-bbef4.cloudfunctions.net/api'  //API URL(cloud function) URL
});
//To test locally running firebase emulator:start using the example baseURL below 
//baseURL: 'http://localhost:5001/clone-bbef4/us-central1/api'  //API URL(cloud function) URL


export default instance;