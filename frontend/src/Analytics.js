import React, {PureComponent} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import axios from 'axios';

const PieChart = require("react-chartjs").Pie;
const BarChart = require("react-chartjs").Bar;
const DoughnutChart = require("react-chartjs").Doughnut;
const PolarAreaChart = require("react-chartjs").PolarArea;


class Analytics extends PureComponent {
    state = {
        genderData: [],
        ageLabels: [],
        ageNums: [],
        ageData: [],
        partData: []

    };

    componentDidMount() {
        axios.get('http://localhost:3001/analytics/gender').then((res) => {
            const males = res.data.males;
            const females = res.data.females;

            this.setState({
                genderData: [{
                    value: males,
                    label: 'Males'
                }, {
                    value: females,
                    label: 'Females'
                }]
            });
        });
        axios.get('http://localhost:3001/analytics/age').then((res) => {
            const ageData = res.data;

            const ageLabels = [];
            const ageNums = [];

            ageData.forEach((data) => {
                ageLabels.push(data[0]);
                ageNums.push(data[1]);
            });

            this.setState({
                ageLabels,
                ageNums
            });
        });

        axios.get('http://localhost:3001/analytics/part').then((res) => {

            const north = res.data.north;
            const south = res.data.south;
            const east = res.data.east;
            const west = res.data.west;


            this.setState({
                    partData: [{
                        value: north,
                        label: 'North'
                    }, {
                        value: south,
                        label: 'South'
                    }, {
                        value: east,
                        label: 'East'
                    }, {
                        value: west,
                        label: 'West'
                    }]
                });
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col className={'text-center'}md={6}>
                        <h3 >Gender Demographics</h3>
                        <PieChart data={this.state.genderData}/>
                    </Col>

                    <Col className={'text-center'} md={6}>
                        <h3 >Age Demographics</h3>
                        <BarChart data={{
                            labels: this.state.ageLabels, datasets: [{
                                label: 'Age',
                                data: this.state.ageNums
                            }]
                        }}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'text-center'} md={6}>
                        <h3 >Activity Demographics</h3>
                        <BarChart data={{
                            labels: this.state.ageLabels, datasets: [{
                                label: 'Age',
                                data: this.state.ageNums
                            }]
                        }}/>
                    </Col>
                    <Col className={'text-center'} md={6}>
                        <h3 className={'text-center'}>Location Demographics</h3>
                        <DoughnutChart data={this.state.partData}/>
                    </Col>

                </Row>
            </Grid>
        );
    }
}

export default Analytics;