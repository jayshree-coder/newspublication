const cookieService = {
    setCookie: (name, value, days) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);

        const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
        document.cookie = cookieString;
    },

    getCookie: (name) => {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [ cookieName, cookieValue ] = cookie.split('=').map((c) => c.trim());
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    },

    removeCookie: (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
};

export default cookieService;