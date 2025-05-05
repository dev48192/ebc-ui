import React, {useEffect, useState} from  'react';
import axios from 'axios';
import Styles from  './Users.module.scss';

interface User {
    id: string;
    name: string;
}
type ApiResponse = User[];

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        axios
      .get<ApiResponse>("/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
    },[])

    if (loading) {
        return <div className={Styles['card']}>Loading...</div>;
    }

    if (error) {
        return <div className={Styles['card']}>{error}</div>;
    }

    return (
        <div className={Styles['card']}>
            {users.map((user)=> (
                <h3 key={user.id}>Name: {user.name}</h3>
            ))}
        </div>
    );
}

export default Users;