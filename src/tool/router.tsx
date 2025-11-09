import Files from '@/pages/files';
import Home from '@/pages/home';
import Video from '@/pages/video';
import ProgressPage from '@/pages/progress';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Images from '@/pages/files/images';
import RecycleBin from '@/pages/files/recycleBin';
import FilesAll from '@/pages/files/all';

export default function CustomRouter() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/files" element={<Files />}>
            <Route index element={<FilesAll />} />
            <Route path="all" element={<FilesAll />} />
            <Route path="images" element={<Images />} />
            <Route path="recycle-bin" element={<RecycleBin />} />
        </Route>
        <Route path="/video" element={<Video />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="*" element={<></>} />
    </Routes>
}