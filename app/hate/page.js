import Image from 'next/image'
import React from 'react';
import "../components/hatepostcomponent.css";



export default function Hate() {
    return (
        <div className="hate-div">
            <p className="hiImKaan">&nbsp;</p>
            <div>list of my hate posts</div>
            <br />
            <div> disclaimer: </div>
            <div> i just love to hate, these are all my personal opinions</div>
            <div> please don&apos;t come for me </div>
            <br />
            <div className="hiImKaan">
                •<a className="hiImKaan">Why &quot;AI Companion&quot; Companies Suck</a> 
            </div>
            <br />
            <object
                data="https://drive.google.com/file/d/1iOe4jyBk4iGjBQ9Xj06BBl868kku71R-/preview"
                width={500}
                height={620}
            />
        </div>
    );
}
