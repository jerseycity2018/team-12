import React, {PureComponent} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import axios from 'axios';

const PieChart = require("react-chartjs").Pie;
const BarChart = require("react-chartjs").Bar;

class Analytics extends PureComponent {
    state = {
        genderData: [],
        ageLabels: [],
        ageDatasets: [],
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

            const ageNums = [];

            ageData.forEach((data) => {
                ageNums.push({label: data[0], value: data[1]});
            });

            this.setState({
                ageData: ageNums,
            });
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <PieChart data={this.state.genderData}/>
                    </Col>

                    <Col md={6}>
                        <PieChart data={this.state.ageData}/>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Grid>
        );
    }
}

export default Analytics;