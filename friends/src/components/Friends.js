import React from 'react'
import { connect } from 'react-redux'

import {fetchFriends, AddFriend} from '../utils/actions'

const Friends = (props) => {
    return ( 
    <div>
        <p> Friends Go HERE </p> 
        </div>
    )

}

const mapStateToProps = state => {
    console.log(state)

    return {
        ...state
    }
}

export default connect(mapStateToProps, { fetchFriends, AddFriend })(Friends)