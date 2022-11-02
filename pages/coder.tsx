import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import HoverVideos from '../components/HoverVideos'
import Navbar from '../components/Navbar'

const coder: NextPage = () => {
    return (
        <main>
            <Navbar />
            <Footer />
            <h1>coder page</h1>
        </main>
    )
}


export default coder