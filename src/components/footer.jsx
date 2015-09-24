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