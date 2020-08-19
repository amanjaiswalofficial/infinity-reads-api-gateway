// Parameters are modified here so that 
// they can be sent to the service accordingly.


const requestParams = (params) => {
    // TODO: When filterBy will be implemented 
    // this method will return the comma 
    // separated values to blogs service for now.

    // TODO: Change this for loop to map().
    for (const propName in params){
        if (params[propName] === null || params[propName] === undefined){
            delete params[propName];
        }
    }
    return params
}

module.exports = requestParams;
