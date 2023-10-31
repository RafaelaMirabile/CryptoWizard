import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

    if (isFetching) return 'Loading...'
    return (
        <>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col sx={24} lg={6} sm={12} className="crypto-card" key={currency.id}  >
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CryptoCurrencies;