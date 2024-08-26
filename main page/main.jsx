var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="main.css" />
        <title>Web Design Mastery | Responsive Portfolio</title>
        <nav>
          <div className="nav__content">
            <div className="logo"><a href="#">Portfolio</a></div>
            <label htmlFor="check" className="checkbox">
              <i className="ri-menu-line" />
            </label>
            <input type="checkbox" name="check" id="check" />
            <ul>
              <li><a href="Port.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="resume.html">Resume</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="contactpage.html">Contact</a></li>
            </ul>
          </div>
        </nav>
        <section className="section">
          <div className="section__container">
            <div className="content">
              <p className="subtitle">HELLO</p>
              <h1 className="title">
                I'm <span>Harshit<br />a</span> Web Developer
              </h1>
              <p className="description">
                Welcome to my web developer portfolio! I'm Harshit, a skilled and
                creative web developer with a passion for creating beautiful,
                responsive, and user-friendly websites. I've worked on a variety of
                web projects, ranging from personal blogs to e-commerce platforms.
              </p>
              <div className="action__btns">
                <a href="contactpage.html"><button className="hire__me">Hire Me</button></a>
                <a href="portfolio.html"><button className="portfolio">Portfolio</button></a>
              </div>
            </div>
            <div className="image">
              <img src="assest.img.jpeg" alt="profile" />
            </div>
          </div>
        </section>
      </div>
    );
  }
});