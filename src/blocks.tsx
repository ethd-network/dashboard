import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'

import "./css/blocks.sass"
import {Bar, BarChart} from "recharts";
import React from "react";
import Header from "./header";


function BlockCountCharts() {

    const data = [
        {
            number: 234,
            tx_count: 1234,
        },
    ]
    // random add data
    for (let i = 0; i < 120; i++) {
        data.push({
            number: Math.floor(Math.random() * 15000000),
            tx_count: Math.floor(Math.random() * 2000),
        });
    }

    return (
        <BarChart width={1200} height={30} data={data}>
            <Bar dataKey="tx_count" fill="#efefef" radius={4}/>
        </BarChart>
    )
}

export default function Blocks() {
    return (
        <>
            <Header/>
            <div className={"blocks"}>
                <BlockCountCharts/>
                <CardGroup className={"blocks-card"}>
                    <Card border={"light"}>
                        <Card.Body>
                            <Card.Text> <i className="bi bi-globe blocks-card-bi"></i>
                                0x01
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border={"light"}>
                        <Card.Body>
                            <Card.Text><i className="bi bi-box blocks-card-bi"/>
                                15,123,423
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border={"light"}>
                        <Card.Body>
                            <Card.Text><i className="bi bi-receipt blocks-card-bi"/>
                                123,111,222
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border={"light"}>
                        <Card.Body>
                            <Card.Text><i className="bi bi-fuel-pump blocks-card-bi"/>
                                23
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border={"light"}>
                        <Card.Body>
                            <Card.Text><i className="bi bi-clock blocks-card-bi"/>
                                9,238
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>

                <Table hover className={"blocks-table"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Timestamp</th>
                        <th>Txn</th>
                        <th>Miner / Recipient</th>
                        <th>Reward(ETH)</th>
                        <th>Gas Used</th>
                        <th>Size(bytes)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href={"/block/15123456"}>15123456</a></td>
                        <td>2022-09-11 12:34:55</td>
                        <td>798</td>
                        <td>0xA16156527aae69C4Fd4Cd5fA68AECf27b1F088ff</td>
                        <td>0.005999</td>
                        <td>2360260 (78%)</td>
                        <td>8528</td>
                    </tr>
                    <tr>
                        <td><a href={"/block/15123455"}>15123455</a></td>
                        <td>2022-09-11 12:34:55</td>
                        <td>798</td>
                        <td>0xA16156527aae69C4Fd4Cd5fA68AECf27b1F088ff</td>
                        <td>0.005999</td>
                        <td>2360260 (78%)</td>
                        <td>8528</td>
                    </tr>
                    <tr>
                        <td><a href={"/block/134"}>15123454</a></td>
                        <td>2022-09-11 12:34:55</td>
                        <td>798</td>
                        <td>0xA16156527aae69C4Fd4Cd5fA68AECf27b1F088ff</td>
                        <td>0.005999</td>
                        <td>2360260 (78%)</td>
                        <td>8528</td>
                    </tr>
                    </tbody>
                </Table>


                <Pagination className={"pagination"}>
                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Next/>
                    <Pagination.Last/>
                </Pagination>
            </div>
        </>
    )
}