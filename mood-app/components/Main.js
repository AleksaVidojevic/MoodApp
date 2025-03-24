import React, { Children } from 'react'

export default function Main(props) {
    const { children } = props
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}
