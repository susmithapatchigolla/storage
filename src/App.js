import logo from './logo.svg';
import './App.css';
import Amplify, { Auth,Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
Amplify.configure(awsconfig);

function App() {
  const sush=async (e)=>{
    const file = e.target.files[0];
    console.log(file)
  try {
     const a= await Storage.put(file.name, file, {
      contentType: file.type // contentType is optional
    });
    console.log(a)
  } catch (error) {
    console.log('Error uploading file: ', error);
  }  
  }
  return (
    <div >
      <p>Hello</p>
      <input type="file" onChange={sush}/>
    </div>
  );
}

export default withAuthenticator(App);
