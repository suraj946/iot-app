const validateHours = (hours) => {
    let response;
    if(hours?.trim().length === 0){
        response = {
            isValid: false,
            errorText: `hours is required`
        }
    }
    else if(isNaN(hours)){
        response = {
            isValid: false,
            errorText: `Invalid hours, it should be a number`
        }
    }
    else if(Number(hours) < 1 || Number(hours) > 24){
        response = {
            isValid: false,
            errorText: `Invalid hours, it should be between (1-24)`
        }
    }
    else{
        response={
            isValid:true,
            errorText:""
        }
    }
    return response;
}

const validateMinutes = (minutes) => {
    let response;
    if(minutes?.trim().length === 0){
        response = {
            isValid: false,
            errorText: `minutes is required`
        }
    }
    else if(isNaN(minutes)){
        response = {
            isValid: false,
            errorText: `Invalid minutes, it should be a number`
        }
    }
    else if(Number(minutes) < 0 || Number(minutes) > 60){
        response = {
            isValid: false,
            errorText: `Invalid minutes, it should be between (0-60)`
        }
    }
    else{
        response={
            isValid:true,
            errorText:""
        }
    }
    return response;
}

export {
    validateHours,
    validateMinutes
}