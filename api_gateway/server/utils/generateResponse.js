// Generic overall response is made here

const requestParams = require('./requestParams.js');


const getStatus = (status) => {
    if (status === 200){
        return "SUCCESS"
    } else {
        return "FAILURE"
    }
}

const generateResponse = (
    response, 
    message = null,
    ) => {

    const gateway_response = {};

    gateway_response['code'] = response.code;
    gateway_response['count'] = response.count || null;
    gateway_response['datetime'] = response.datetime || 
                    new Date(
                        new Date()
                        .toString()
                        .split('GMT')[0]+' UTC')
                        .toISOString()
                        .split('.')[0];
    gateway_response['data'] = response.data || null;
    gateway_response['userData'] = response.userData || null;                    
    gateway_response['message'] = response.message || message;
    gateway_response['status'] = response.status || getStatus(response.code);
    gateway_response['timestamp'] = response.timestamp || new Date().getTime();

    return requestParams(gateway_response);

}

module.exports = generateResponse;
