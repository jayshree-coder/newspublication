// get URL variable from env file
const  API_URL=process.env.API_URL;
import cookieService from "./CookiesService.js";

/**
 * 
 * @param {String} url End Point of the API
 * @param {String} token Bearer Token
 * @returns {Object}
 */
export const makeGetRequest = (url) => {
    const token = cookieService.getCookie('_token');
    return fetch(API_URL+url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return response.json();
            }
        })
        .catch(error => {
            throw error;
        });
};

/**
 * 
 * @param {*} url End Point of the API
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const makePostRequest = (url, data) => {
    const token = cookieService.getCookie('_token');
    return fetch(API_URL+url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                return response.json();
            } else {
                return response.json()
            }
        })
        .catch(error => {
            throw error;
        });
};

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
export const makePutRequest = (url, data) => {
    const token = cookieService.getCookie('_token');
    return fetch(API_URL+url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return response.json()
            }
        })
        .catch(error => {
            throw error;
        });
}

export const makeDeleteRequest = (url) => {
    const token = cookieService.getCookie('_token');
    return fetch(API_URL+url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return response.json()
            }
        })
        .catch(error => {
            throw error;
        });
}