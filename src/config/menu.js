import React from 'react';
const menu = [
    {
        name: "Trang chủ",
        path: "/",
        exact: true,
        main: () => <HomePage/>
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
export default menu;