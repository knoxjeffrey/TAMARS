var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="social">
      <div className="social-icons">
        <ul className="soc">
          <li><a className="soc-twitter" href="https://twitter.com/intent/tweet?url=http://www.tamars.co.uk&text=Check%20out%20the%20TAMARS%20treatment&via=tamars_therapy" target="_blank"></a></li>
          <li><a className="soc-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftamars.co.uk" target="_blank"></a></li>
          <li><a className="soc-google" href="https://plus.google.com/share?url=http://www.tamars.co.uk" target="_blank"></a></li>
          <li><a className="soc-linkedin soc-icon-last" href="http://www.linkedin.com/cws/share?url=http%3A%2F%2Ftamars.co.uk" target="_blank"></a></li>
        </ul>
      </div>
    </div>
  }
});