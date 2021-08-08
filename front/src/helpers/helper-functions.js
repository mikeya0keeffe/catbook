export const getHeaders = (state) => {

    const headers = {
        'Authorization': `${state.auth.tokenType} ${state.auth.authToken}`
    };

    return headers
}