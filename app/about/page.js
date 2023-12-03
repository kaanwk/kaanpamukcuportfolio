import Image from 'next/image'
import React from 'react';
import styles from "../components/pagecomponent.css";
import yourGif2 from "../images/snoopygif2.gif";
import ProfilePic from "../images/pfp.png";


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
                            <div className="hiImKaan">• getting an internship for 2024 summer</div>
                            <div className="hiImKaan">• getting my degree</div>
                            <div className="hiImKaan">• working on Machacks</div>
                            <div className="hiImKaan">• preparing events as international student ambassador lead</div>
                            <div className="hiImKaan">• working on my upcoming 3 projects</div>
                            <br></br>
                            <div className="hiImKaan">
                                I love to code in -
                            </div>
                            <div className="hiImKaan">
                                I love the tools -
                            </div>
                            <div className="hiImKaan">
                                I love the frameworks -
                            </div>
                            <br></br>
                            <br></br>
                            <div className="hiImKaan">I am someone who loves partaking in many activities,</div>
                            <div className="hiImKaan">
                                previously I have been in a band as a guitarist,
                            </div>
                            <div className="hiImKaan">
                                played piano, the flute. In terms of sports,
                            </div>
                            <div className="hiImKaan">
                                I love basketball and have participated in tournaments in
                            </div>
                            <div className="hiImKaan">
                                Istanbul, all of Italy, and Barcelona.
                            </div>
                            <div className="hiImKaan">
                                I have recently picked up trying to learn Tennis which is what I am
                            </div>
                            <div className="hiImKaan">
                                currently the most in love with.
                            </div>
                            <div className="hiImKaan">
                                I also love gaming and regularly play TFT and Valorant.
                            </div>
                            <br></br>
                            <br></br>
                            <div className="hiImKaan">
                                One thing that has never left my life is fashion and collecting,
                            </div>
                            <div className="hiImKaan">
                                I collect all sorts of things, from Yugioh cards
                            </div>
                            <div className="hiImKaan">
                                to Money from all around the world.
                            </div>
                                I have loved fashion ever since I was a child
                            <div className="hiImKaan">
                                and very much care about how I dress every day!
                            </div>
                            <br></br>
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
