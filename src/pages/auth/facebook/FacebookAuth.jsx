const getAccessToken = async (code) => {
    const clientId = process.env.FACEBOOK_APP_ID;
    const clientSecret = process.env.FACEBOOK_APP_SECRET;
    const redirectUri = process.env.REDIRECT_URI;

    try {
        const response = await axios.get('https://graph.facebook.com/v17.0/oauth/access_token', {
            params: {
                client_id: clientId,
                redirect_uri: redirectUri,
                client_secret: clientSecret,
                code: code,
            },
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
    }
};

const getUserData = async (accessToken) => {
    try {
        const response = await axios.get('https://graph.facebook.com/me', {
            params: {
                fields: 'id,name,email',
                access_token: accessToken,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};