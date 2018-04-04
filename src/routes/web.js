import React from 'react';
import HomePage from 'resources/HomePage';
import Login from 'resources/Login';
import PageNotFound from 'resources/PageNotFound';
const web = [
    {
        name: "Trang chủ",
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        name: "Đăng nhập",
        path: "/login",
        exact: false,
        main: () => <Login />
    },
    {
        name: "Không tìm thấy trang",
        path: "",
        exact: false,
        main: () => <PageNotFound />
    }
];
export default web;