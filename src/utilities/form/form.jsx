var React = require('react');
var _ = require('underscore');
var Input = require('./input');
var Icon = require('./icon');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      email: null,
      personName: null,
      forbiddenWords: ["password", "user", "username"]
    }
  },

  saveAndContinue: function (e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email);
        //&& !_.isEmpty(this.state.statesValue)

    if(canProceed) {
      var data = {
        email: this.state.email,
      }
      alert('Thanks.');
    } else {
      this.refs.email.isValid();
      this.refs.personName.isValid();
    }
  },

  handleNameInput: function(event) {
    this.setState({
      personName: event.target.value
    })
  },

  handleEmailInput: function(event){
    this.setState({
      email: event.target.value
    });
  },

  validateEmail: function (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  isEmpty: function (value) {
    return !_.isEmpty(value);
  },

  render: function() {
    return (
      <div className="send_message_section">

        <div className="send_message_form">
          <h1>We're here to help</h1>
          <p>Let us know what we can do to help and we'll get back to you as soon as possible</p>
          <form onSubmit={this.saveAndContinue}>

            <Input
              text="Email Address"
              ref="email"
              type="text"
              defaultValue={this.state.email}
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput}
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
            />

            <Input
              text="Name"
              ref="personName"
              validate={this.isEmpty}
              value={this.state.personName}
              onChange={this.handleNameInput}
              emptyMessage="Name can't be empty"
            />

            <button
              type="submit"
              className="highlight">
              Send Message
            </button>

          </form>

        </div>

      </div>
    );
  }

});
