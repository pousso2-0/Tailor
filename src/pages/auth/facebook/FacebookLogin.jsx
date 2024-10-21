import React from 'react';

const FacebookLogin = () => {
  const clientId = process.env.FACEBOOK_APP_ID;
  const redirectUri = process.env.REDIRECT_URI;

  const handleLogin = () => {
    const facebookAuthUrl = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=email,public_profile&response_type=code`;
    window.location.href = facebookAuthUrl;
  };

  return <button onClick={handleLogin}>Login with Facebook</button>;
};

export default FacebookLogin;
