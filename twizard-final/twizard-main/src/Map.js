import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
      return (
        <Map
            google={this.props.google}
            zoom={20}
            style={mapStyles}
            initialCenter={
            {
              lat: 0,
              lng: 0
            }
          }
        >
          <Marker
          />
        </Map>
      );
    }
  }
  
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0'
  })(MapContainer);