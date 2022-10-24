import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const about: NextPage = () => {
    return (
        <main>
            <Navbar />
            <h1>About me page</h1>
        </main>
    )
}


export default about