import Image from 'next/image'
import React from 'react';
import styles from "../components/projectscomponent.css";
import yourGif3 from "../images/snoopygif3.gif";
import Link from 'next/link';
import rbcreach from "../images/RBC-Reach.jpeg";
import reviewifyimage from "../images/reviewify.jpeg";
import wattsupimage from "../images/wattsup.png";
import timmyimage from "../images/timmy.jpeg";
import fittedimage from "../images/fitted.jpeg";
import fittedimage2 from "../images/fittedpic.jpeg";


export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={styles.mainContainer}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image src={yourGif3} alt="" width={100} height={100} />
                </div>
                <div className="mainContent">
                    <div className={styles.hiImKaanContainer}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p className="hiImKaan">&nbsp;</p>
                            <div>list of all of my projects:</div>
                            <br></br>
                            <div className={styles.underline}>
                                <a href="https://devpost.com/software/watts-up" target="_blank" rel="noopener noreferrer" className={styles.underline}>
                                <div className="hiImKaan" >•<a className="underlined">Watts Up</a></div>
                                </a>
                            </div>
                            <div className="hiImKaan">
                            A community-driven EV platform that optimizes charging
                            </div>
                            <div className="hiImKaan">
                            with smart scheduling, dynamic pricing, voice commands,
                            </div>
                            <div className="hiImKaan">
                            and QR-based bookings for an efficient, and accessible experience.
                            </div>
                            <div className="hiImKaan">
                                using OpenAI API, Django, Express/Node.js, MongoDB, Next, React
                            </div>
                            <br></br>
                            <Image src={wattsupimage} alt="Watts Up" width={500} height={500} style={{ marginLeft: '5px' }} />
                            <br></br>
                            <div className={styles.underline}>
                                <a href="https://devpost.com/software/reach-rbc" target="_blank" rel="noopener noreferrer" className={styles.underline}>
                                <div className="hiImKaan" >•<a className="underlined">Reach RBC</a></div>
                                </a>
                            </div>
                            <div className="hiImKaan">
                                Making banking easier in Canada
                            </div>
                            <div className="hiImKaan">
                                for international students like me!
                            </div>
                            <div className="hiImKaan">
                                (My first ever Hackathon win!)
                            </div>
                            <br></br>
                            <Image src={rbcreach} alt="RBC - Reach" width={500} height={500} style={{ marginLeft: '5px' }} />
                            <br></br>
                            <div className={styles.underline}>
                                <a href="https://devpost.com/software/reviewify" target="_blank" rel="noopener noreferrer" className={styles.underline}>
                                <div className="hiImKaan" >•<a className="underlined">Reviewify</a></div>
                                </a>
                            </div>
                            <div className="hiImKaan">
                                Making Google Reviews more useful
                            </div>
                            <div className="hiImKaan">
                                for any business with giving detailed
                            </div>
                            <div className="hiImKaan">
                                information on positive & negative reviews
                            </div>
                            <div className="hiImKaan">
                                using Cohere NLP technology
                            </div>
                            <br></br>
                            <Image src={reviewifyimage} alt="Reviewify" width={500} height={500} style={{ marginLeft: '5px' }} />
                            <br></br>
                            <div className={styles.underline}>
                                <a href="https://github.com/kaanwk/fitted" target="_blank" rel="noopener noreferrer" className={styles.underline}>
                                <div className="hiImKaan" >•<a className="underlined">Fitted</a></div>
                                </a>
                            </div>
                            <div className="hiImKaan">
                                virtual closed app made with Swift
                            </div>
                            <br></br>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                <Image src={fittedimage} alt="Fitted" width={300} height={250} />
                                <Image src={fittedimage2} alt="Fitted" width={250} height={250} />
                            </div>
                            <br></br>
                            <div className={styles.underline}>
                                <a href="https://github.com/kaanwk/TimmyDisco" target="_blank" rel="noopener noreferrer" className={styles.underline}>
                                <div className="hiImKaan" >•<a className="underlined">Timmy at the Disco</a></div>
                                </a>
                            </div>

                            <div className="hiImKaan">
                                Placed Timmy in a bucket and
                            </div>
                            <div className="hiImKaan">
                              had him party at a disco 
                            </div>
                            <br></br>
                            <Image src={timmyimage} alt="Timmy" width={500} height={500} style={{ marginLeft: '5px' }} />
                            <br></br>
                            <div className="hiImKaan">
                            <Link href ="/" className="hiImKaan" >•<a className="underlined"> This website!</a></Link>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="hiImKaan">languages, tools and frameworks I have used in my projects:</div>
                            <div className="hiImKaan">
                                Java, Python, Flask, Git, Pandas, NumPy, Bash, Assembly, C++, C, SQL,
                            </div>
                            <div className="hiImKaan">
                                MongoDB, OpenAI API, CohereAPI, Google Maps/Geolocation API, Express
                            </div>
                            <div className="hiImKaan">
                                Javascript, React.js, Node.js, Next.js, HTML, CSS, Jira, OpenGL, Firebase
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}