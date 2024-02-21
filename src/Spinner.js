import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Spinner = () => {
    return (
        <div className=' container'>
            <div className='row align-items-center justify-content-center min-vh-100 ' >
                <div className="col-12 text-center">
                    <div>
                        <FontAwesomeIcon spin icon={faSpinner} />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Spinner