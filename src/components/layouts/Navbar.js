
import React from 'react'
import PropTypes from 'prop-types'

var FontAwesome = require('react-fontawesome');
//make sure to require font awesome like aboev
//font awesome prop name must be passed

const Navbar = (props) => {
    //static default props if we have no props passed
    return (
            <nav className='navbar bg-primary'>
                <h1>
                    <FontAwesome className={props.icon} name ='quidditch' /> {props.title}
                </h1>

            </nav>
        )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fal fa-quidditch'
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
