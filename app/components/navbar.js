import Link from 'next/link';
import React from 'react';
import "./navbarcomponent.css";

export default function Navbar() {
    return (
        <div>
            <div className="flexContainer">
                <div className="selectionSidebar">
                    <Link href="/"> home</Link>
                    <h1></h1>
                    <h1></h1>
                    <Link href="/about"> about</Link>
                    <h1></h1>
                    <h1></h1>
                    <Link href="/internships"> internships</Link>
                    <h1></h1>
                    <h1></h1>
                    <Link href="/projects"> projects</Link>
                    <h1></h1>
                    <h1></h1>
                    <Link href="/hate"> hate posts</Link>
                    <h1></h1>
                    <h1></h1>
                    <Link href="/resume"> resume</Link>
                </div>
            </div>
        </div>
    );
}

