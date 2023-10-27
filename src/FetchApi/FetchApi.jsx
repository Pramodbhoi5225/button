import React, { useEffect, useState } from 'react';
import './FetchApi.css';

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((x) => setData(x));
  }, []);

  return (
    <div className='fetchapi'>
      <input type='text' onChange={(e) => setSearch(e.target.value)} />
      {data &&
        data
          .filter((item) => item.name.toLowerCase().includes(search))
          .map((item) => {
            return (
              <section key={item.id}>
                <p>{item.name}</p>
                <p>{item.username}</p>
                <span>{item.email}</span>
              </section>
            );
          })}
    </div>
  );
};

export default FetchApi;
