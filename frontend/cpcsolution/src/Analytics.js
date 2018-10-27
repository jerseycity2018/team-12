import React, {PureComponent} from 'react';
import "~react-vis/dist/style";
import {
    ArcSeries,
    HeatmapSeries,
    HorizontalGridLines,
    LabelSeries,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis
} from 'react-vis';
import {Col, Grid, Row} from 'react-bootstrap';
import axios from 'axios';

class Analytics extends PureComponent {
    state = {
        genderData: [],
        ageData: []
    };

    componentDidMount() {
        /*
        {
                                angle0: 0,
                                angle: portion * PI * 2,
                                radius0: 0,
                                radius: 10,
                                color: COLORS[13]
                            }, {
                                angle0: portion * PI * 2,
                                angle: 2 * PI,
                                radius0: 0,
                                radius: 10,
                                color: COLORS[12]
                            }
         */
        axios.get('/analytics/gender').then((res) => {
            const genderData = res.data;
            this.setState({genderData});
        });
        axios.get('/analytics/age').then((res) => {
            const ageData = res.data;
            //const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];
            this.setState({ageData});
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={300} height={300}>
                            <XAxis/>
                            <YAxis/>
                            <ArcSeries
                                animation
                                radiusType={'literal'}
                                data={[]}
                                colorType={'literal'}
                            />
                        </XYPlot>
                    </Col>

                    <Col md={6}>
                        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                            <VerticalGridLines/>
                            <HorizontalGridLines/>
                            <XAxis/>
                            <YAxis/>
                            <BarSeries className="vertical-bar-series-example" data={greenData}/>
                            <BarSeries data={blueData}/>
                            <LabelSeries data={labelData} getLabel={d => d.x}/>
                        </XYPlot>
                    </Col>
                </Row>
                <Row>
                    <XYPlot
                        width={300}
                        height={300}>
                        <XAxis />
                        <YAxis />
                        <HeatmapSeries
                            className="heatmap-series-example"
                            data={myData}/>
                    </XYPlot>
                </Row>
            </Grid>
        );
    }
}
