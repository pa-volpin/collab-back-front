import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash';
import TableContent from './TableContent'

const Table = () => {
  const [data, setData] = useState([]);

  const getData = () =>
    fetch(`http://localhost:3030/gastos`).then(res => res.json());

  const postData = (data) =>
    fetch(`http://localhost:3030/gastos`,
      { method: 'POST', body: JSON.stringify(data) })

  const deleteData = (id) =>
    fetch(`http://localhost:3030/gastos/${id}`, { method: 'DELETE' })

  const updateData = (id, data) =>
    fetch(`http://localhost:3030/gastos/${id}`,
      { method: 'PUT', body: JSON.stringify(data) })

  useEffect(() => {
    getData().then(r => setData(r))
  }, []);

  return (
    <section>
      { !isEmpty(data) && <TableContent data={ data }
        deleteData={ deleteData } /> }
    </section>
  );
}

export default Table

