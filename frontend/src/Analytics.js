import React, {PureComponent} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import axios from 'axios';

import {Pie, Bar, Doughnut, Polar} from 'react-chartjs-2';



class Analytics extends PureComponent {
    state = {
        genderData: {
            datasets: [{
                data: [],
                backgroundColor : [
                    "red", "green"],
            }],
            labels: []
        },
        ageLabels: [],
        ageNums: [],
        ageData: [],
        partData: {
            datasets: [{
                data: [],
                backgroundColor : [
                    "blue", "green","white", "grey"],
        }],
            labels: []
        },
        activityDate: {
            datasets: [{
                data: [],
                backgroundColor : [
                    "#138D75", "#21618C","#154360", "#4A235A"],
            }],
            labels: []
        },
        dateNYCdata: [],
        dataNotdata: []
    };

    componentDidMount() {
       // Chart.defaults.global.defaultColor = CanvasRenderingContext2D.createLinearGradient()

        axios.get('http://localhost:3001/analytics/gender').then((res) => {
            const males = res.data.males;
            const females = res.data.females;

            this.setState({
                genderData: {
                    datasets: [{
                        data: [males, females]
                    }],
                    labels: ['Males', 'Females']
                }
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
                backgroundColor: "green",
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
                partData: {
                    datasets:
                        [{
                            data: [
                                north,
                                south,
                                east,
                                west
                            ],

                        }],
                    labels: ['North', 'South', 'East', 'West']
                }
            });
        });


        axios.get('http://localhost:3001/analytics/activity').then((res) => {

            const walking = res.data.walking;
            const sports = res.data.sports;
            const leisure = res.data.leisure;
            const eat = res.data.eat;


            this.setState({
                borderColor: "#8e5ea2",
                activityDate: {datasets: [
                    {data:[ walking, sports, leisure, eat],
                    }],
                labels: ['Walking', 'Sports', 'Leisure', 'Eat']}

            });
        });


        axios.get('http://localhost:3001/analytics/dateNYC').then((res) => {

            const arrNYC = res.data.arrNYC;
            const arrNot = res.data.arrNot;

            console.log(arrNYC);

            this.setState({
                dataNotdata: arrNot,
                dateNYCdata: arrNYC,


            })
        });

        axios.get('http://localhost:3001/analytics/firstNYC').then((res) => {

            const arrFirst = res.data.arrFirst;
            const arrExperienced = res.data.arrExperienced;

            //console.log(arrNYC);

            this.setState({
                dataArrFirst: arrFirst,
                dataArrExperienced: arrExperienced,
                backgroundColor : ["#FAE5D3", "#154360"]
            })
        });


    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col className={'text-center'} sm={6}>
                        <h3>Gender Demographics</h3>
                        <Pie data={this.state.genderData} options={{responsive: true}}/>
                    </Col>

                    <Col className={'text-center'} sm={6}>
                        <h3>Age Demographics</h3>
                        <Bar options={{responsive: true}} data={{
                            labels: this.state.ageLabels, datasets: [{
                                label: 'Age',
                                data: this.state.ageNums,
                                backgroundColor: ["#2980B9","#2980B9","#2980B9","#2980B9","#2980B9","#2980B9","#2980B9","#2980B9","#2980B9","#2980B9","#2980B9","#2980B9"]
                            }]
                        }}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'text-center'} sm={6}>
                        <h3 className={'text-center'}>Activity Demographics</h3>
                        <Polar data={this.state.activityDate} options={{responsive: true}}/>
                    </Col>
                    <Col className={'text-center'} md={6}>
                        <h3 className={'text-center'}>Location Demographics</h3>
                        <Doughnut data={this.state.partData} options={{responsive: true}}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'text-center'} sm={12}>
                        <h3>Park usage of tourist vs. residents</h3>
                        <Bar style={{marginLeft: 0}} redraw options={{responsive: true}} data={{
                            labels: ["January", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"],
                            datasets: [{
                                label: 'Live In NYC',
                                data: this.state.dateNYCdata,
                                backgroundColor:["#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5","#7FB3D5"]

                            },
                                {
                                    backgroundColor: ["#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F","#5B2C6F"],
                                    label: 'Does Not Live In NYC',
                                    data: this.state.dataNotdata
                            }]
                        }}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'text-center'}sm={12}>
                        <h3 >First Time vs Not First Time Use of Central Park</h3>
                        <Bar style= {{marginLeft: 0}} redraw options={{responsive:true}} data={{
                            labels: ["January", "Feb", "March" , "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"], datasets: [{
                                label: 'First Time in Park',
                                data: this.state.dataArrFirst,
                                backgroundColor : [
                                    "#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8","#AAB7B8"]
                            },
                                {
                                    backgroundColor : [
                                       "#17202A","#17202A","#17202A","#17202A","#17202A","#17202A","#17202A","#17202A","#17202A","#17202A","#17202A","#17202A"],
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