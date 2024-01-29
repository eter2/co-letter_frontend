const url = 'http://3.36.88.85:8080';

exports.countMail = async (accessToken) => {
    try {
      const response = await fetch(`${url}/api/mailbox/countmail`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        mode: 'cors',
      });
  
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error during fetch profile:', error);
    }
}

exports.getMail = async (accessToken, id) => {
    try {
      const response = await fetch(`${url}/api/mailbox/getallmail/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        mode: 'cors',
      });
  
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error during fetch profile:', error);
    }
}

exports.sendMail = async (accessToken, id, content, secret, background) => {
  try {
    const response = await fetch(`${url}/api/letter/${id}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`
      },
      body: JSON.stringify({content: content, secret: secret, background: background}),
      mode: 'cors',
    });
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during fetch profile:', error);
  }
}