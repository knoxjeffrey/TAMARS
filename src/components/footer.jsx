var React = require('react');
var Social = require('./social');

module.exports = React.createClass({
  render: function() {
    return <footer className="footer-distributed">

			<div className="footer-left">

				<p className="footer-links">
					<a href="/">Home</a>
					·
					<a href="/tamars">TAMARS</a>
					·
					<a href="/contact">Contact</a>
				</p>

				<h3>21st Century Back Care &copy; 2015</h3>
			</div>

			<div className="footer-center">

			</div>

			<div className="footer-right text-center">

				<h3>Recommend</h3>
        <br/>
				<div><Social /></div>

			</div>

		</footer>

  }
});