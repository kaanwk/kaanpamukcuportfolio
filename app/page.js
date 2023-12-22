import Image from 'next/image'
import React from 'react';
import styles from "./components/pagecomponent.css";
import githubIcon from "../app/images/githubicon.png";
import linkedinIcon from "../app/images/linkedinlogo.webp"
import gmailIcon from "../app/images/gmailicon.png"
import yourGif from "../app/images/snoopygiff.gif";

const siteTitle = 'Kaan Website'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" >
      <div className={styles.mainContainer}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={yourGif} alt="" width={100} height={100} />
        </div>
        <div className="mainContent">
          <div className={styles.hiImKaanContainer}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p className="hiImKaan">&nbsp;</p>
              <div className="hiImKaan">Hi, i’m Kaan!</div>
              <div className="hiImKaan">&nbsp;</div>
              <div className="hiImKaan">I am currently seeking summer 2024 internships! -</div>
              <div className="hiImKaan">
                please send me an email at: alpikaan.pamukcu@gmail.com
              </div>
              <br></br>
              <br></br>
              <div className="hiImKaan">I am a student from McMaster University, based in Toronto,</div>
              <div className="hiImKaan">
                currently obtaining my combined degree in
              </div>
              <div className="hiImKaan">
                Computer Science and Economics!
              </div>
              <br></br>
              <br></br>
              <div className="hiImKaan">
                I have previously interned at TD Bank, Hitachi and Beko
              </div>
              <div className="hiImKaan">
                and would love to work for you.
              </div>

              <div className="hiImKaan">
                Please reach out to me at alpikaan.pamukcu@gmail.com
              </div>
              <div className="hiImKaan">
                and see my resume in the resume tab to your left!
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
          <div className="icons" >
            <ul>
              <li>
                <a href="https://github.com/kaanwk" target="_blank" rel="noopener noreferrer">
                  <Image src={githubIcon} alt="" width={30} height={30} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kaanpamukcu" target="_blank" rel="noopener noreferrer">
                  <Image src={linkedinIcon} alt="" width={30} height={30} />
                </a>
              </li>
              <li>
                <a href="mailto:alpikaan.pamukcu@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Image src={gmailIcon} alt="" width={30} height={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
