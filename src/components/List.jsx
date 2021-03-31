import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

function List({users,getInfo}) {
      return (
        <ul>
            {users && users.map(item =>(
                <li data-id={item.id} data-name={item.name} onClick={getInfo}>{item.name}</li>
            ))}
        </ul>
    )
}

List.propTypes = {

}

export default List

