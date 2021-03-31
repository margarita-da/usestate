import React, {useEffect, useState} from 'react'
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState();
  const [info, setInfo] = useState({
    userId:'',
    userName:''
  }
);
  let userId, userName;
  useEffect(() => {
      fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
          .then((response) =>  response.json())
          .then((result) => {
              setUsers(result)
          })
          .catch((e) => console.log(e));
    }, []);
    const getInfo = e =>{
      if(e.target !== undefined){
        userId = Number(e.target.dataset.id)
        userName = e.target.dataset.name
        setInfo ({userId, userName})
      }
    }

return (
    <div className="App">
      <List users={users} getInfo={getInfo}/>
      <Details info={info}/>
    </div>
  );
}

export default App;
