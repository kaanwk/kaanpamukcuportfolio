import Image from 'next/image'
import React from 'react';
import "../components/hatepostcomponent.css";



export default function Hate() {
    return (
        <div className="hate-div">
            <p className="hiImKaan">&nbsp;</p>
            <div>My research papers</div>
            <br />
            <div> Assessing the Role of Artificial Intelligence and Machine Learning</div>
            <div> in Shaping Economic Growth, Policy, and Asset Pricing </div>
            <br />
            <object
                data="https://drive.google.com/file/d/1hFKGMwkGsO5P0MkO0VDcJmVUS0BPw-6T/preview"
                width={500}
                height={620}
            />
        </div>
    );
}
