var React = require('react');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

var coords = {
  lat: 54.480784,
  lng: -6.226331
};

module.exports = React.createClass({
  onMapCreated(map) {
      map.setOptions({
        disableDefaultUI: true
      });
    },

    onDragEnd(e) {
      console.log('onDragEnd', e);
    },

    onCloseClick() {
      console.log('onCloseClick');
    },

    onClick(e) {
      console.log('onClick', e);
    },

    render() {
      return (
        <Gmaps
          width={'100%'}
          height={'450px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          loadingMessage={'Loading...'}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable={true}
            onDragEnd={this.onDragEnd} />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'21St Century Back Care'}
            onCloseClick={this.onCloseClick} />
          <Circle
            lat={coords.lat}
            lng={coords.lng}
            radius={0}
            onClick={this.onClick} />
        </Gmaps>
      );
    }
});