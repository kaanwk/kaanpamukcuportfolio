import Image from 'next/image'
import React from 'react';
import styles from "../components/pagecomponent.css";
import yourGif2 from "../images/snoopygif2.gif";
import ProfilePic from "../images/pfp.png";
import HoverImage from '../components/hoverimage';


export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={styles.mainContainer}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image src={yourGif2} alt="" width={100} height={100} />
                </div>
                <div className="mainContent">
                    <div className={styles.hiImKaanContainer}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p className="hiImKaan">&nbsp;</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={ProfilePic} alt="" width={200} height={200} />
                            </div>  
                            <div className="hiImKaan">currently I am working on</div>
                            <div className="hiImKaan">• getting an internship/newgrad position for 2025</div>
                            <div className="hiImKaan">• getting my degree (6 courses left!)</div>
                            <div className="hiImKaan">• working on fitted</div>
                            <br></br>
                            <div className="hiImKaan">
                                I love to code in - Python, Java, SQL, PostgreSQL,
                            </div>
                            <div className="hiImKaan">
                            JavaScript, TypeScript, Swift, R, C, C++, Kotlin, Go Lang
                            </div>
                            <br></br>
                            <div className="hiImKaan">
                                I love the tools/fameworks - Node.js, Pandas, NumPy,
                            </div>
                            <div className="hiImKaan">
                                Figma, React, Jira,Selenium, Cucumber, Git, OpenGL,
                            </div>
                            <div className="hiImKaan">
                                Firebase, MongoDB, Flask, AWS, GRPC, SOAP, Hadoop
                            </div>
                            <div className="hiImKaan">
                                Apache Airflow, Maven, Workato, Mulesoft, Bitbucket, Docker
                            </div>
                            <br></br>
                            <br></br>
                            <div className="hiImKaan"> 
                                Being an international student, I love to travel, and
                            </div>
                            <div className="hiImKaan">
                                have friends all over the world! I love to play Basketball
                            </div>
                            <div className="hiImKaan">
                                and Tennis, however I watch all kinds of sports.
                            </div>
                            <div className="hiImKaan">
                                I also love fashion and collecting trading cards, like
                            </div>
                            <div className="hiImKaan">
                                Basketball, Soccer cards as well as Pokemon cards!
                            </div>
                            <br></br>
                            <br></br>
                            <div className="hiImKaan">
                                
                                 <HoverImage />
                            </div>
                            <br></br>
                            <div className="hiImKaan">
                                Currently my dream place to travel is, Buenos Aires - Argentina
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
      </main >
  );
}
