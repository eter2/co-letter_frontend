const url = 'http://3.36.88.85:8080';

exports.login = async (code) => {
    try {
        const body = {
            authorizationCode : code,
        };
        const response = await fetch(`${url}/api/auth/kakaoLogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during login:', error);
    }
}