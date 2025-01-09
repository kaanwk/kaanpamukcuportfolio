import Image from 'next/image'
import React from 'react';
import "../components/hatepostcomponent.css";



export default function Hate() {
    return (

        <div className="hate-div">
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24 border"> */}
            {/* <div className={styles.mainContainer}> */}
                {/* <div className="mainContent">
                    <center> */}
                    <p className="hiImKaan">&nbsp;</p>
                    <div>list of my hate posts</div>
                    <br></br>
                    <div> disclaimer: </div>
                    <div> i just love to hate, these are all my personal opinions</div>
                    <div> please dont come for me </div>
                    <br></br>
                    <div className="hiImKaan" >•<a className="hiImKaan">Why "AI Companion" Companies Suck</a></div>
                    <br></br>
                        <object data=
                            "https://drive.google.com/file/d/1iOe4jyBk4iGjBQ9Xj06BBl868kku71R-/preview"
                            width={500} height={620}>
                        </object>
                    {/* </center>
                </div> */}
            {/* </div> */}

{/* 
        </main> */}

        </div>
    );
}