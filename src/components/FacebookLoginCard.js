import { Card } from 'react-bootstrap';

const FacebookLoginCard = () => {
  const fBLogin = async () => {
    const { authResponse } = await new Promise((resolve, reject) => {
      window.FB.login((response) => {
        if (response.authResponse) {
          resolve(response);
        }
        reject(response.error);
      }, { scope: ['email', 'public_profile', 'user_posts', 'user_photos'] });
    });
    console.log(authResponse);
  }

  window.FB.login(function(response) {
    if (response.authResponse) {
      console.log('Welcome!  Fetching your information.... ');
      window.FB.api('/me', function(response) {
      console.log('Good to see you, ' + response.name + '.');
    });
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  });

  return (
    <Card>
      <Card.Title>Card section</Card.Title>
      <button onClick={fBLogin}>Login To FB</button>
    </Card>
  );
}

export default FacebookLoginCard;