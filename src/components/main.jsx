var React = require('react');
var ReactRouter = require('react-router');
var Header = require('./header');

module.exports = React.createClass({
  render: function() {
    return <div>
      <Header />
      <div className="main-content">
        {this.props.children}
      </div>
    </div>
  }
});