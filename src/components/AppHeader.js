import React, { useState } from "react";
import { Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";

export default function AppHeader({ seo }) {
  const [isActive, setisActive] = useState(false);

  const handleClick = () => {
    setisActive(!isActive);
  };

  const handleKeyDown = () => {
    setisActive(!isActive);
  };

  return (
    <nav className="navbar is-transparent mb-5 p-5" role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="title">RAULI_SIMO</h1>
        </Link>
        <div
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          data-target="navbarText"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="navbarText"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/blogs">
            Blogs
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/about">
              Docs
            </Link>
            <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item" to="/about">
                Overview
              </Link>
              <Link className="navbar-item" to="/about">
                Modifiers
              </Link>
              <hr class="navbar-divider"></hr>
              <Link className="navbar-item" to="/about">
                Version
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <ThemeToggle className="is-flex is-align-self-center mr-5" />
              <p className="control">
                <a
                  className="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://eincode.com"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=Hello World&hashtags=raulisimo`}
                >
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" href="/">
                  <span>Login</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
