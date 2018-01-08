import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Comp.scss';

class Comp extends Component {
  // static propTypes = {
  //   children: PropTypes.node,
  //   className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.base}>
        {'Hey '}
      </div>
    );
  }
}

export default Comp;
