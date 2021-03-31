import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

function Details({info}) {
    const [details, setDetails] = useState();
    useEffect(() => {
        if(info){
          const id = info.userId
          fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
              .then((response) =>  response.json())
              .then((result) => {
                setDetails(result)
              })
              .catch((e) => console.log(e));
          }
      }, [info.userId]);
    return (
        <>
            {details && (
                <div key={details.id} className="details">
                    <div>
                        <img src={details.avatar && details.avatar} alt='avatar'/>
                    </div>
                    <div>{details.name}</div>
                    <div>City: {details.details.city}</div>
                    <div>Company: {details.details.company}</div>
                    <div>Position: {details.details.position}</div>
                </div>
                )}
        </>
    )
}

Details.propTypes = {

}

export default Details

