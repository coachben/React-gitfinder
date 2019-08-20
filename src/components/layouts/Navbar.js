
import React, { Component } from 'react'
import PropTypes from 'prop-types'

var FontAwesome = require('react-fontawesome');
//make sure to require font awesome like aboev
//font awesome prop name must be passed

export class Navbar extends Component {
    
    //static default props if we have no props passed
    //to us
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fal fa-quidditch'
    }

    static propTypes={
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }


    
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <FontAwesome className={this.props.icon} name ='quidditch' /> {this.props.title}
                </h1>

            </nav>
        )
    }
}

export default Navbar
