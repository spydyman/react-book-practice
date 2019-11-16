import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  dataHoge: PropTypes.func,
};

class child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // fuga: this.props.dataHoge(),
    };
    this.fuga = this.props.dataHoge.bind(this);
  }

  clickButton() {
    return this.props.dataHoge();
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.fuga(); }}>ボタン</button>
      </div>
    );
  }
}

child.propTypes = propTypes;
export default child;