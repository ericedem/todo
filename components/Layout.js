import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="page-content">{this.props.children}</div>
        <style jsx>{`
          .page-content {
            margin: auto;
            max-width: 360px;
          }
        `}</style>
      </div>
    );
  }
}
