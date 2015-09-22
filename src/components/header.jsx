var React = require('react');
var Router = require('react-router');
var Link = Router.Link
var Sticky = require('react-sticky');

module.exports = React.createClass({

  getInitialState: function() {
    return { active: false }
  },

  handleClick: function() {
    this.setState({active: !this.state.active});
  },

  render: function() {
    return <Sticky topOffset={1} stickyClass="scrolled" stickyStyle={{}}>
      <div className="header clearfix">

        <Link to="/">
          <div id="logo">
            <img src="../../images/21_C_Logo.svg" alt="21st Century Back Care" />
          </div>
        </Link>
      </div>

      <div className ={"pull-right hamburger" + (this.state.active ? " is-active" : "")} onClick={this.handleClick} >
        <div className="_layer -top"></div>
        <div className="_layer -mid"></div>
        <div className="_layer -bottom"></div>
      </div>

      <div className={"primary-nav" + (this.state.active ? " is-active" : "")} onClick={this.handleClick} >
        <div className="_wrapper">
          <ul className="_nav-list">
            <li className="home">
              <Link to="/" className="_nav-item -home active">Home</Link>
            </li>
            <li className="tamars">
              <Link to="/treatment" className="_nav-item -nav2 active">TAMARS</Link>
            </li>
            <li className="home">
              <Link to="/" className="_nav-item -nav3 active">And Another Nav</Link>
            </li>
            <li className="contact">
              <Link to="/contact" className="_nav-item -contact active">Contact</Link>
            </li>
          </ul>
  	    </div>

      </div>

    </Sticky>
  }
});

