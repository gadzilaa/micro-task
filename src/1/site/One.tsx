import React from 'react'
import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

export const One = () => {
    return (
        <>
            <Header title={'new header'} />
            <Body title={'new body'} />
            <Footer title={'new footer'} />
        </>
    )
}
