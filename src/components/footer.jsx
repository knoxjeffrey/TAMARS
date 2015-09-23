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

				<div>
					<img className="footer-icons" src="../../images/Map2.svg" alt="Map" />
					<p><span>63 Main Street</span> Moira, Northern Ireland, BT67 0LQ</p>
				</div>

				<div>
					<img className="footer-icons" src="../../images/Telephone.svg" alt="Map" />
					<p>028 9261 0616</p>
				</div>

				<div>
					<img className="footer-icons" src="../../images/Mail.svg" alt="Map" />
					<p><a href="mailto:info@tamars.co.uk">info@tamars.co.uk</a></p>
				</div>

			</div>

			<div className="footer-right text-center">

				<h3>Recommend</h3>
        <br/>
				<div><Social /></div>

			</div>

		</footer>




  }
});