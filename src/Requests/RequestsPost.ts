

export  const RequestsPost = async (email: string, password: string) => {
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        return response;
    } catch (error) {            
        console.log(error)
    }
}
