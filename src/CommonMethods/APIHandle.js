class ApiHandle {

     sendPostAuthentication = (url, credentials, callback) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        };

        fetch(url, requestOptions)
				.then(response => response.json())
				.then(data =>  callback(data))
                .catch((err) => {
                    callback(err);
                 });
    };

    sendGetAuthentication = (url, id, callback) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'userid': id },
        };
        
        fetch(url, requestOptions)
				.then(response => response.json())
				.then(data =>  callback(data))
                .catch((err) => {
                    callback(err);
                 });
    };

    sendGetGroup = (url, callback) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        };
        
        fetch(url, requestOptions)
				.then(response => response.json())
				.then(data =>  callback(data))
                .catch((err) => {
                    callback(err);
                 });
    };

}

const ApiClient = new ApiHandle();

export default ApiClient;