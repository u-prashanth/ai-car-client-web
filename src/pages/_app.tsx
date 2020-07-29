import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../scss/main.scss'

export default class TFMWebsite extends App
{
    static async getInitialProps({ Component, ctx })
    {
        let pageProps = {}

        if(Component.getInitialProps)
        {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render()
    {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>90° Project</title>
                </Head>
                <Component {...pageProps}/>
            </>
        )
    }
}