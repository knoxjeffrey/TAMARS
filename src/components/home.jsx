var React = require('react');
var Router = require('react-router');
var Link = Router.Link
var FluidVid = require('../utilities/fluidvid')

module.exports = React.createClass({
  render: function() {
    return <div>
      <div className="home-title-bar">
        <h1 className="container home-title">
          Put Back Pain Behind You
        </h1>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-md-7">
            <div className="fluidvids-vimeo">
              <FluidVid src="http://player.vimeo.com/video/139934432" />
            </div>
          </div>

          <br/>

          <div className="col-md-5">

            <div className="home-benefits">
              <div className="home-ticks">
                <img className="ticks" src="../../images/Yes.svg" alt="Tick" />
                <h3 className="tick-text">Reduce back pain quickly</h3>
              </div>

              <div className="home-ticks">
                <img className="ticks" src="../../images/Yes.svg" alt="Tick" />
                <h3 className="tick-text">Improve your quality of life</h3>
              </div>

              <div className="home-ticks">
                <img className="ticks" src="../../images/Yes.svg" alt="Tick" />
                <h3 className="tick-text">Improve spinal stability</h3>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="more-tamars">
        <div className="section-header text-center">
          Does It Really Work?
        </div>
        <div className="section-content container">
          <p>
            After watching the video I'm sure the main thing you want to know is, does it really work?! We're keen to continually test TAMARS to prove its effectiveness and that's why we teamed up with the University of Central Lancashire (UCLan).
          </p>
          <p>
            They used the latest motion capture technology to track patient movements with functional tasks such as walking, bending, sitting, etc.  This technology can track spinal movements in fine detail to see if TAMARS was having an effect.  Here's what they said:
          </p>
          <div className="uclan-study">
            <div className="col-md-8">
              <blockquote>Overall this study has identified short and long term applications of TAMARS® to positively influence the spinal biomechanics during functional and clinical tasks. It can be concluded that TAMARS® positively influences spinal control. This improved control may be due to an increased proprioception of the surrounding muscles, causing a greater degree of spinal stability and therefore reducing the participant’s pain.
              </blockquote>
            </div>
            <div className="col-md-4 study-link text-center">
              <a href="http://www.academia.edu/1823411/TAMARS_Report" target='_blank'>
                <button className="highlight">Read The Study</button>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="why-tamars">

        <div className="section-content container">
          <p>
            You can read more about what makes TAMARS so unique by <Link to="/treatment"> clicking this link</Link> or if you're heard enough and want to book now then click the button below!
          </p>
        </div>

        <div className="text-center">
          <Link to="/contact">
            <button className="highlight">I want to book an appointment now</button>
          </Link>
        </div>

      </div>

    </div>
  }
});