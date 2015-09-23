var React = require('react');
var Map = require('./map')

module.exports = React.createClass({
  render: function() {
    return <div>
      <div className="home-title-bar">
        <h1 className="container home-title">
          Contact
        </h1>
      </div>
      <div className="container">
        <div className="col-md-12">
          <Map />
        </div>
      </div>
    </div>
  }
});