var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      src : '',
      width: 1600,
      height: 900
    };
  },

  getRatio: function (width, height) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  },

  render: function() {
    var ratio = {
      paddingTop: this.getRatio(this.props.width, this.props.height)
    };

    return (
      <div className={ 'google-map' } style={ ratio }>
        <iframe src={ this.props.src } width={ this.props.width } height={ this.props.height } frameBorder={ 0 } allowFullScreen></iframe>
      </div>
    );
  }
});