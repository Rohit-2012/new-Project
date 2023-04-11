import { useState } from 'react';
import styles from './Form.module.css'

export default function Form() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [hobby, setHobby] = useState('');

  const handelNameChange = (e) => {
    setName(e.target.value);

  };

  function handleAge(e) {
    setAge(e.target.value);
  }

  const handleHobby = (e) => {
    setHobby(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    setData([
      ...data,
      {
        name,
        age,
        hobby,
        email,
      },
    ]);

    setAge('');
    setEmail('');
    setHobby('');
    setName('');

    console.log(data);
  };

  const handelItemdelete = (email) => {
    const newData = data.filter((ele) => ele.email !== email);

    setData(newData);
  };

  return (
    <div className={styles.App}>
      <div className={styles.formContainer}>
        <div className={styles.inputData}>
          <form>
            <input
              value={name}
              onChange={handelNameChange}
              type="text"
              placeholder="Enter your Name"
            />
            <input
              value={age}
              onChange={handleAge}
              type="number"
              placeholder="Enter your Age"
            />
            <input
              value={hobby}
              onChange={handleHobby}
              type="text"
              placeholder="Enter your hobbies"
            />
            <input
              value={email}
              onChange={handleEmail}
              type="text"
              placeholder="Enter Your EMail"
            />

            <button onClick={handelSubmit}>ADD to list</button>
          </form>
        </div>
        <div className={styles.liveData}>
          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4>{age}</h4>
          <h4>{hobby}</h4>
        </div>
      </div>

      <div className={styles.tableContainer}>
        {data.map((user) => {
          return (
            <div className={styles.tableItem} style={{ display: 'flex', alignItems:'center'}}>
              <p>{user.name}-</p>

              <p>{user.age}-</p>

              <p>{user.hobby}-</p>

              <p>{user.email}-</p>

              <span onClick={() => handelItemdelete(user.email)}>❌</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
