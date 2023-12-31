import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function App() {

  const [ipAddress, setIPAddress] = useState('')

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.log(error))
  }, []);


  // const [ipAddress, setIpAddress] = useState(null);

  // useEffect(() => {
  //   // Fetch the user's IP address when the component mounts
  //   // axios.post('http://localhost:4000/record-ip')
  //   axios.post('https://fusion-chain.onrender.com/record-ip')
  //     .then(response => {
  //       setIpAddress(response.data.ipAddress);
  //       console.log(ipAddress);
  //     })
  //     .catch(error => {
  //       console.error('Error fetsadfsching IP address:', error);
  //     });
  // }, [ipAddress]);

  return (
    <div>
      <h1>Users IP Address:</h1>
      {ipAddress ? <p>{ipAddress}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
