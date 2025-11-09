import http, { httpGet, httpPost, httpPut, httpDelete } from './http';

export const userApi = {
    createNewUser: () => httpPost(process.env.APP_API_BASE_URL_D + '/api/users'),
    loginWithUserId: (data: any) => httpPost(process.env.APP_API_BASE_URL_D + '/api/users/login-with-id', data),
    loginWithEmail: (data: any) => httpPost(process.env.APP_API_BASE_URL_D + '/api/users/login', data),
    sendVerificationCode: (data: any) => httpPost(process.env.APP_API_BASE_URL_D + '/api/users/verification-code', data),
    bindEmailToAccount: (data: any) => httpPost(process.env.APP_API_BASE_URL_D + '/api/users/verify-email', data),
};

export const storageApi = {
    fetchStorageInfo: () => httpGet(process.env.APP_API_BASE_URL_D + '/api/users/storage-info'),
};  

// 文件相关 API
export const fileApi = {
    // 获取文件列表
    getFiles: () => httpGet('/files'),

    // 上传文件
    uploadFile: (data: FormData) => httpPost('/files/upload', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }),
};

// 视频相关 API
export const videoApi = {
    // 获取视频列表
    getVideos: () => httpGet('/videos'),

    // 获取视频详情
    getVideo: (id: number) => httpGet(`/videos/${id}`),
};

// 默认导出所有 API
export default {
    user: userApi,
    file: fileApi,
    video: videoApi,
    storage: storageApi,
};