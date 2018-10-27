import React, {PureComponent} from 'react';
import { render } from 'react-dom';
import {FeatureGroup, LayersControl, Map, Marker, Popup, TileLayer} from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer/src/HeatmapLayer';

import axios from 'axios';

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
            <div>
                <Map center={[40.785091, -73.968285]} zoom={13} style={{ height: '100%' }} >
                    <LayersControl>
                        <LayersControl.BaseLayer name="Base" checked>
                            <TileLayer
                                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.Overlay name="Heatmap" checked>
                            <FeatureGroup color="purple">
                                <Marker position={[50.05, -0.09]} >
                                    <Popup>
                                        <span>A pretty CSS3 popup.<br /> Easily customizable. </span>
                                    </Popup>
                                </Marker>
                                <HeatmapLayer
                                    fitBoundsOnLoad
                                    fitBoundsOnUpdate
                                    points={this.state.heatData}
                                    longitudeExtractor={m => m[1]}
                                    latitudeExtractor={m => m[0]}
                                    intensityExtractor={m => parseFloat(m[2])}
                                />
                            </FeatureGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name="Marker">
                            <FeatureGroup color="purple">
                                <Marker position={[40.785091, -73.968285]} >
                                    <Popup>
                                        <span>A pretty CSS3 popup.<br /> Easily customizable. </span>
                                    </Popup>
                                </Marker>
                            </FeatureGroup>
                        </LayersControl.Overlay>
                    </LayersControl>
                </Map>
            </div>
        );
    }
}

export default Analytics;