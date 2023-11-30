import React, { useState } from 'react'
import useMigration from '../hooks/useMigration'

function Dev() {
    const [value, setValue] = useState('')
    let migration = useMigration()

    const updateValue = () => {
        migration(value)
    }
    return (
        <div>
            <textarea value={value} onChange={e => {
                setValue(e.target.value)
            }} placeholder='Enter some text' />
            <button onClick={updateValue}>Update</button>
        </div>
    )
}

export default Dev