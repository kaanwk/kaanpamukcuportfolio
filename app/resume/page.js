import Image from 'next/image'
import React from 'react';
import styles from "../components/resumecomponent.css";



export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={styles.mainContainer}>
                <div className="mainContent">
                    <center>
                        <object data=
                            "https://drive.google.com/file/d/1nbi7zEEZv1QJs9Q9SS6Zpmgb2EtsIm7a/preview"
                            width={500} height={620}>
                        </object>
                    </center>
                </div>
            </div>


        </main>
    );
}