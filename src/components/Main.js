import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/didi-me.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            As a Software Engineer during the last 12+ years, I’ve got the
            chance to participate in many projects, work along with lots of
            professionals, share and learn. I've worked for 4 companies, where
            we have used mostly Microsoft technologies in our projects and the
            English language for communication with the customers and among the
            teams. Currently i am discovering the world of NODE JS and it's the
            time when one considers that technologies are popping up each day….
            some of the most important qualities to be good at software
            development is the the agility and passion to gain knowledge in
            different areas in terms of technology stack, product development
            processes, etc..
          </p>
          <p>
            Apart from Software Development, I am interested also in Digital
            Marketing, Languages, Video editing, sports and tourism :)
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>

          <p>
            Node JS Developer
            <br />
            october 2019 - present <br /> NodeJS, MySQL, React, Heroku & AWS
          </p>
          <p>
            Software Developer
            <br />
            march 2018 - july 2019 <br /> .Net & C#, Oracle, GoCD
          </p>
          <p>
            .NET Developer
            <br />
            march 2015 - february 2018 <br /> .Net & C#, MS SQL, WPF, WCF,
            Firefly
          </p>
          <p></p>
          {close}
        </article>

        <article
          id="other"
          className={`${this.props.article === 'other' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Other projects</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Video editing
            <ul>
              <li>TedX Vitosha</li>
              <li>OSM International Group</li>
            </ul>
          </p>

          <p>
            UI
            <ul>
              <li>MetaTrade website design</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/delyana-ivanova/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/didiiiiiii7"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/didiiiiiii7/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/delyana-dv"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
