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
        partData: [],
        activityDate: [],
        dateNYCdata: [],
        dataNotdata: [],
        dataArrFirst: [],
        dataArrExperienced: []

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


        axios.get('http://localhost:3001/analytics/activity').then((res) => {

            const walking = res.data.walking;
            const sports = res.data.sports;
            const leisure = res.data.leisure;
            const eat = res.data.eat;


            this.setState({
                borderColor: "#8e5ea2",
                activityDate: [{
                    value: walking,
                    label: 'Walking',
                    Color: "#8e5ea2"
                }, {
                    value: sports,
                    label: 'Sports',
                    backgroundColorHover: "#3e95cd"
                }, {
                    value: leisure,
                    label: 'Leisure',
                    backgroundColorHover: "#3cba9f"
                }, {
                    value: eat,
                    label: 'Eat',
                    backgroundColorHover: "#e8c3b9"
                }]
            });
        });


        axios.get('http://localhost:3001/analytics/dateNYC').then((res) => {

            const arrNYC = res.data.arrNYC;
            const arrNot = res.data.arrNot;

            console.log(arrNYC);

            this.setState({
                dataNotdata: arrNot,
                dateNYCdata: arrNYC

            })
        });

        axios.get('http://localhost:3001/analytics/firstNYC').then((res) => {

            const arrFirst = res.data.arrFirst;
            const arrExperienced = res.data.arrExperienced;

            //console.log(arrNYC);

            this.setState({
                dataArrFirst: arrFirst,
                dataArrExperienced: arrExperienced

            })
        });


    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col className={'text-center'} sm={6}>
                        <h3 >Gender Demographics</h3>
                        <PieChart data={this.state.genderData} options={{responsive:true}}/>
                    </Col>

                    <Col className={'text-center'} sm={6}>
                        <h3 >Age Demographics</h3>
                        <BarChart options={{responsive:true}} data={{
                            labels: this.state.ageLabels, datasets: [{
                                label: 'Age',
                                data: this.state.ageNums
                            }]
                        }}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'text-center'} sm={6}>
                        <h3 className={'text-center'}>Activity Demographics</h3>
                        <PolarAreaChart data={this.state.activityDate} options={{responsive:true}} />
                    </Col>
                    <Col className={'text-center'} md={6}>
                        <h3 className={'text-center'}>Location Demographics</h3>
                        <DoughnutChart data={this.state.partData} options={{responsive:true}}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'text-center'}sm={12}>
                        <h3 >Park usage of tourist vs. residents</h3>
                        <BarChart style= {{marginLeft: 0}} redraw options={{responsive:true}} data={{
                            labels: ["January", "Feb", "March" , "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"], datasets: [{
                                label: 'Live In NYC',
                                data: this.state.dateNYCdata
                            },
                                {
                                    fillColor: "rgba(220,220,220,0.5)",
                                    label: 'Does Not Live In NYC',
                                    data: this.state.dataNotdata
                            }]
                        }}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'text-center'}sm={12}>
                        <h3 >First Time vs Not First Time Use of Central Park</h3>
                        <BarChart style= {{marginLeft: 0}} redraw options={{responsive:true}} data={{
                            labels: ["January", "Feb", "March" , "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"], datasets: [{
                                label: 'First Time in Park',
                                data: this.state.dataArrFirst
                            },
                                {
                                    fillColor: "rgba(220,220,220,0.5)",
                                    label: 'Not First Time in park',
                                    data: this.state.dataArrExperienced
                                }]
                        }}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Analytics;