import React, { useEffect, useState } from 'react';
import api from '@/tool/api';
import { store } from '@/tool/store';
import { STORAGE_USER_EMAIL, STORAGE_USER_ID, STORAGE_USER_TOKEN } from '@/tool/config';
import { ShimmerButton } from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';

interface StorageInfo {
    available_space?: number;
    email_bonus_space?: number;
    free_space?: number;
    plan_space?: number;
    total_space?: number;
    used_space?: number;
}

export default function Home() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [objectStorageInfo, setObjectStorageInfo] = useState<StorageInfo>({});

    //   // 获取用户列表
    //   const fetchUsers = async () => {
    //     setLoading(true);
    //     setError(null);

    //     try {
    //       // 使用 API 配置获取用户列表
    //       const response = await api.user.getUsers();
    //       setUsers(response.data);
    //     } catch (err) {
    //       setError('Failed to fetch users');
    //       console.error('Error fetching users:', err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   // 创建新用户
    //   const createUser = async () => {
    //     try {
    //       // 使用 API 配置创建用户
    //       const response = await api.user.createUser({
    //         name: 'New User',
    //         email: 'newuser@example.com'
    //       });
    //       // 更新用户列表
    //       setUsers([...users, response.data]);
    //     } catch (err) {
    //       setError('Failed to create user');
    //       console.error('Error creating user:', err);
    //     }
    //   };

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const userId = await store.get(STORAGE_USER_ID);
        const userToken = await store.get(STORAGE_USER_TOKEN);

        if (userId && userToken) {
            requestStorageInfo()
            // requestLoginWithUserId(userId);
        } else {
            requestCreateNewUser();
        }
    };

    const requestCreateNewUser = async () => {
        const response: any = await api.user.createNewUser();
        if (response?.id) {
            store.set(STORAGE_USER_ID, response.id)
            requestLoginWithUserId(response.id)
        }
    };

    const requestLoginWithUserId = async (userId: string) => {
        const response: any = await api.user.loginWithUserId({ user_id: userId });
        if (response?.token) {
            store.set(STORAGE_USER_TOKEN, response.token);
            response?.user?.email && store.set(STORAGE_USER_EMAIL, response.user.email);
        }
    };

    const requestStorageInfo = async () => {
        const response: any = await api.storage.fetchStorageInfo();
        if (response) {
            setObjectStorageInfo({
                available_space: response.available_space,
                email_bonus_space: response.email_bonus_space,
                free_space: response.free_space,
                plan_space: response.plan_space,
                total_space: response.total_space,
                used_space: response.used_space,
            })
        }
    };

    return (
        <div className='flex flex-col h-screen p-8'>
            <div className='flex flex-row justify-between'>
                <div className='px-3 py-2 bg-[#84858d12] w-80 rounded-md flex flex-row items-center gap-1 cursor-pointer'>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4875" width="20" height="20"><path d="M447.325002 129.919978c-178.868807 0-323.872319 145.003512-323.872319 323.874365s145.003512 323.874365 323.872319 323.874365c178.870854 0 323.874365-145.003512 323.874365-323.874365S626.195855 129.919978 447.325002 129.919978zM447.325002 713.712071c-143.31915 0-259.915681-116.598578-259.915681-259.917728s116.596532-259.917728 259.915681-259.917728 259.917728 116.598578 259.917728 259.917728S590.643128 713.712071 447.325002 713.712071z" fill="#AAAAAD" p-id="4876"></path><path d="M891.573945 840.061734 748.236376 696.699606c-13.43601 16.625656-28.371164 31.91385-44.338834 46.099944l142.458549 142.481062c6.246261 6.246261 14.427594 9.368368 22.60995 9.368368s16.363689-3.123131 22.60995-9.368368C904.065444 872.789113 904.065444 852.553233 891.573945 840.061734z" fill="#AAAAAD" p-id="4877"></path></svg>
                    <p className='text-[#AAAAAD] text-[13px]'>Search for files in the cloud disk</p>
                </div>
                <div className='px-3 py-2 bg-[#F2F5FF] w-80 rounded-md flex flex-row items-center gap-1'>
                    <span className='text-[13px] text-[#A8AAB3]'>info</span>
                    <div className='w-px h-[22px] mx-2.5 bg-[#637dff3d]'></div>
                    <div className='flex flex-col w-full gap-0.5'>
                        <div className='flex flex-row justify-between'>
                            <span className="text-[#A8AAB3] text-[12px]">{objectStorageInfo.used_space} GB / {objectStorageInfo.total_space} GB</span>
                            <button className='text-[13px] text-[#637dff] cursor-pointer'>Manager</button>
                        </div>
                        <div className='flex flex-row'>
                            <ProgressBar progress={75} className="bg-[#CECFD8]" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <ShimmerButton shimmerColor="#8563FF" background='#637DFF' shimmerSize='0.1em'>
                    <span className="text-center text-[13px] leading-none tracking-tight whitespace-pre-wrap text-white dark:from-white dark:to-slate-900/10">
                        Upload
                    </span>
                </ShimmerButton> */}
            </div>
            <div className='absolute right-10 bottom-10'>
                <div className='relative'>
                    <div className='w-12 h-12 bg-[#637dff] flex flex-col items-center justify-center rounded-full shadow-md cursor-pointer hover:bg-[#7a90ff]'>
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10116" width="24" height="24"><path d="M479.232 479.232V118.784c0-9.556992 3.072-17.408 9.216-23.552s13.995008-9.216 23.552-9.216 17.408 3.072 23.552 9.216 9.216 13.995008 9.216 23.552v360.448h360.448c9.556992 0 17.408 3.072 23.552 9.216s9.216 13.995008 9.216 23.552-3.072 17.408-9.216 23.552-13.995008 9.216-23.552 9.216H544.768v360.448c0 9.556992-3.072 17.408-9.216 23.552s-13.995008 9.216-23.552 9.216-17.408-3.072-23.552-9.216-9.216-13.995008-9.216-23.552V544.768H118.784c-9.556992 0-17.408-3.072-23.552-9.216s-9.216-13.995008-9.216-23.552 3.072-17.408 9.216-23.552 13.995008-9.216 23.552-9.216h360.448z" p-id="10117" fill="#ffffff"></path></svg>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}