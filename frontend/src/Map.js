import React, {PureComponent} from 'react';
import {render} from 'react-dom';
import {FeatureGroup, LayersControl, Map, Marker, Popup, TileLayer} from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import axios from 'axios';
import {Col, Grid, Row} from 'react-bootstrap';

class Analytics extends PureComponent {
    state = {
        heatData: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/analytics/heat').then((res) => {
            this.setState({
                heatData: res.data
            });
        });
    }

    render() {
        return (
            <div className={'leaflet-container'}>
                <Map center={[40.785091, -73.968285]} zoom={13} style={{height: '100%'}}>
                    <HeatmapLayer
                        points={this.state.heatData}
                        longitudeExtractor={m => m[1]}
                        latitudeExtractor={m => m[0]}
                        intensityExtractor={m => parseFloat(m[2])}/>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </div>
        );
    }
}

export default Analytics;