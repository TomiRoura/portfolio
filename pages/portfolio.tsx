import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const portfolio: NextPage = () => {
    return (
        <main>
            <Navbar />
            <h1>Portfolio page</h1>
        </main>
    )
}


export default portfolio