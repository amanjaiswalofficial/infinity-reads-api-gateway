// Generic User Response is created here

const getStatus = (status) => {
    if (status === 200){
        return "SUCCESS"
    } else {
        return "FAILURE"
    }
}

const generateUserResponse = (
    payload = null, 
    status_code,
    message = null,
    ) => {
    
    const userResponse = {};

    userResponse['code'] = status_code;
    userResponse['datetime'] = new Date(
        new Date()
        .toString()
        .split('GMT')[0]+' UTC')
        .toISOString()
        .split('.')[0];
    userResponse['userData'] = payload || null;
    userResponse['message'] = message;
    userResponse['status'] = getStatus(status_code);
    userResponse['timestamp'] = new Date().getTime();

    return userResponse
}

module.exports = generateUserResponse;
