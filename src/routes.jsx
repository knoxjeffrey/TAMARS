var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router/node_modules/history/lib/createBrowserHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require("./components/main");
var Home = require("./components/home");
var Treatment = require("./components/treatment");
var Contact = require("./components/contact");

module.exports = (
  <Router history={new History}>
    <Route component={Main} >
      <Route path="/" component={Home} />
      <Route path="/treatment" component={Treatment} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);