import React from 'react'; 
import './App.css';
import TodoList from './components/TodoList'
import UsersList from './components/UsersList'
// import 'bootstrap/dist/css/bootstrap.main.css';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = ()  => {
  return (

      <div>
        <div>
          <h1>TodoList</h1>
        </div>
        <div>
        <TodoList />
        </div>
        <div>
        <UsersList />
        </div>

       </div>
  

  );
};

export default App;
