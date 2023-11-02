import { Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                Crypto Wizard <br />
                All rigths reserved
            </Typography.Title>
            <Space>
                <Link path="/">Home</Link>
                <Link path="/news">News</Link>
            </Space>
        </>
    )
}
export default Footer;