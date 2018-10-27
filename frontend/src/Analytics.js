import React, {PureComponent} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import axios from 'axios';

const PieChart = require("react-chartjs").Pie;
const BarChart = require("react-chartjs").Bar;

class Analytics extends PureComponent {
    state = {
        genderData: [],
        ageLabels: [],
        ageNums: [],
        ageData: []
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
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <h3 className={'text-center'}>Gender Demographics</h3>
                        <PieChart data={this.state.genderData}/>
                    </Col>

                    <Col md={6}>
                        <h3 className={'text-center'}>Age Demographics</h3>
                        <BarChart data={{
                            labels: this.state.ageLabels, datasets: [{
                                label: 'Age',
                                data: this.state.ageNums
                            }]
                        }}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3 className={'text-center'}>Activity Demographics</h3>
                        <BarChart data={{
                            labels: this.state.ageLabels, datasets: [{
                                label: 'Age',
                                data: this.state.ageNums
                            }]
                        }}/>
                    </Col>

                </Row>
            </Grid>
        );
    }
}

export default Analytics;