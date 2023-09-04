import React from 'react'
import DetailCard from '../../components/Detail'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

function DetailsCities() {
    return (
        <Provider store={store}>
            <div>
                <DetailCard />
            </div>
        </Provider>

    )
}

export default DetailsCities