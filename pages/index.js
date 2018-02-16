import React, { Component } from 'react';

import Layout from '../components/Layout';

let items = ['Apple', 'Banana', 'Cucumber'];

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <h1>Things To Do</h1>
          <ul>
            {items.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <style jsx>{`
          .content {
            box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
            padding: 8px;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          li {
            height: 32px;
          }
        `}</style>
      </Layout>
    );
  }
}
