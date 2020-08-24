// Parameters are modified here so that 
// they can be sent to the service accordingly.


const requestParams = (params) => {

    Object.keys(params).forEach(
        key => (
            params[key]===null || 
            params[key]===undefined
            ) && delete params[key])
    
    return params

}

module.exports = requestParams;
