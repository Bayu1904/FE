import React from 'react'
import topingJSON from '../API/Topping-List.json'

import Topping from '../components/inputForm/Topping'

export default function orderPages() {
    return (
        <>
            <Topping data={topingJSON.ListToping} />
        </>
    )
}

