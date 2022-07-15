import React from 'react';

const HOC = ({ entity, title }) => {
  return class extends React.Component {
    state = {
      data: [],
      title: title,
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json.slice(0, 10) });
      };
      fetchData();
    }
    render() {
      let { data } = this.state;
      let key = entity === 'users' ? 'name' : 'title';
      return (
        <div>
          <h1>{title}</h1>
          <ul>
            {data.map((dt) => {
              return <li key={dt.id}>{dt[key]}</li>;
            })}
          </ul>
        </div>
      );
    }
  };
};

export default HOC;
