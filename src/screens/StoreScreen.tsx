import React from 'react'
import {ReactComponent as AppStore}  from '../AppStore.svg'
import {ReactComponent as PlayStore}  from '../PlayStore.svg'

interface Props {
    
}

const StoreScreen = (props: Props) => {
    return (
        <div id="">
            <p>Download the App here!</p>
            <a href="https://apps.apple.com/de/app/same-blocks/id1548224296"><AppStore /></a>
            <a href="https://play.google.com/store/apps/details?id=com.twinkler.Same2"><PlayStore /></a>
        </div>
    )
}

export default StoreScreen
