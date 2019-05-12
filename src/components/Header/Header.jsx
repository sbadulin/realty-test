import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../arrow.svg";
import styles from "./style/Header.module.scss";

const checkLocation = path => {
  return path === "/"
    ? { title: "Properties", showBackButton: false }
    : { title: "Property", showBackButton: true };
};

const Header = ({ location }) => {
  const { showBackButton, title } = checkLocation(location.pathname);
  return (
    <nav className={styles.header}>
      {showBackButton && (
        <Link className={styles.button} to="/">
          <ArrowIcon width="1em" height="1em" fill="#fff" />
        </Link>
      )}
      <span>{title}</span>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  showBackButton: PropTypes.bool
};

export default withRouter(Header);
