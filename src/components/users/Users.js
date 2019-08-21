import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'

//using https://api.github.com/users
//another way of passing props here
//is to use destructuring ({users,loading}) instead of (props)
//this enables us to avoid the use of props.users and just specify users directly
    
const Users = ({users,loading}) =>{
    if (loading){
         return <Spinner />
    }else{
        return (
            <div style={userStylesheet}>
                {users.map(user =>(
                    <UserItem key={user.id} user={user}/>
            ))} 
            </div>
        )
    }
}


Users.propTypes = {
     users: PropTypes.array.isRequired,
     loading: PropTypes.bool.isRequired
}

const userStylesheet = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1rem'
}

export default Users

