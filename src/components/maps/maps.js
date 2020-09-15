import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from 'react-google-maps';

const mapOptions = { mapTypeControl: false, streetViewControl: false };

const MAPS_API_KEY = 'AIzaSyAM9iaUYVzoZuv_h-ewcDRksyQsRnt6eXw'
const mapStyle = {
  element: {
    height: '100%'
  },
  container: {
    height: '22rem',
    padding: '2rem'
  }
};

class Map extends PureComponent {
  render() {
    const { center } = this.props;

    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultOptions={mapOptions}
          google={props.google}
          defaultZoom={15}
          defaultCenter={center}
        >
          <Marker google={props.google} name={'Marker'} position={center} />

        </GoogleMap>
      ))
    );

    let map;

    if (center.lat !== undefined) {
      map = (
        <AsyncMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            MAPS_API_KEY
            }&libraries=places`}
          loadingElement={<div style={mapStyle.element} />}
          containerElement={<div style={mapStyle.container} />}
          mapElement={<div style={mapStyle.element} />}
        />
      );
    } else {
      map = <div style={mapStyle.container} />;
    }

    return map;
  }
}

Map.propTypes = {
  address: PropTypes.object,
  onPlaceSelected: PropTypes.func,
  height: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  })
};

export default Map;
