const prefix = 'cess-cfast-';

const store = {
    set: (key: any, value: any) => {
        localStorage.setItem(prefix + key, value);
    },
    get: async (key: any) => {
        return await localStorage.getItem(prefix + key);
    },
    remove: (key: any) => {
        localStorage.removeItem(prefix + key);
    },
    removeAll: (keys: any) => {
        keys.forEach((e: any) => {
            localStorage.removeItem(prefix + e);
        });
    }
}

const storeSession = {
    set: (key: any, value: any) => {
        sessionStorage.setItem(prefix + key, value);
    },
    get: (key: any) => {
        return sessionStorage.getItem(prefix + key);
    },
    remove: (key: any) => {
        sessionStorage.removeItem(prefix + key);
    }
}

export { store, storeSession };