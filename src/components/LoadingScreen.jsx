import React from 'react'
import LoadingOverlay from 'react-loading-overlay'

function LoadingScreen() {
    return (
        <LoadingOverlay
            active={true}
            spinner
            text='Loading your content...'
            >
            <p>Nice</p>
        </LoadingOverlay>
    )
}

export default LoadingScreen
