var React = require('react');
var Router = require('react-router');
var Link = Router.Link

var Social = require('./social');

module.exports = React.createClass({
  render: function() {
    return <footer className="footer-distributed">

			<div className="footer-left">

				<p className="footer-links">
					<Link to="/">Home</Link>
					·
					<Link to="/treatment">TAMARS</Link>
					·
					<Link to="/contact">Contact</Link>
				</p>

				<h4>21st Century Back Care &copy; 2015</h4>
			</div>

			<div className="footer-center">

			</div>

			<div className="footer-right text-center">

				<h4>Recommend</h4>
        <br/>
				<div><Social /></div>

			</div>

		</footer>

  }
});