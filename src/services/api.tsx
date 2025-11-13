const BASE_URL = 'http://170.106.188.114:9944';

// 数据相关API
export const dataApi = {
    systemArticlePage: async () => {
        try {
            const formData = new FormData();

            formData.append("page", "1");
            formData.append("rows", "3");
            formData.append("language", "1");
            formData.append("catalogueId", "8");
            formData.append("status", "3");
            formData.append("frontPage", "2");

            const response = await fetch(`${BASE_URL}/system/article/page`, {
                body: formData,
                method: "post",
            }).then(res => res.json())

            return response?.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    sminerQueryCount: async () => { 
        const URL = "https://scan-api.cess.network"
        try {
            const response = await fetch(`${URL}/sminer/query/count`, {
                method: "get",
            }).then(res => res.json())

            return response?.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    spowerQueryTotal: async () => { 
        const URL = "https://scan-api.cess.network"
        try {
            const response = await fetch(`${URL}/spower/query/total`, {
                method: "get",
            }).then(res => res.json())

            return response?.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    accountQueryMoneyedCount: async () => { 
        const URL = "https://scan-api.cess.network"
        try {
            const response = await fetch(`${URL}/account/query/moneyed/count`, {
                method: "get",
            }).then(res => res.json())

            return response?.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    mapsCustoms: async () => { 
        const URL = "https://maps.cess.network"
        try {
            const response = await fetch(`${URL}/customs`, {
                method: "get",
            }).then(res => res.json())

            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export default {
    data: dataApi,
};