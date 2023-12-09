import Image from 'next/image'
import React from 'react';
import styles from "../components/internshipscomponent.css";
import yourGif4 from "../images/snoopygif4.gif";


export default function Internships() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.mainContainer}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={yourGif4} alt="" width={100} height={100} />
          </div>
                  <div className="mainContent">
                  <div className={styles.hiImKaanContainer}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <p className="hiImKaan">&nbsp;</p>
                      <div className="hiImKaan">previous internships:</div>
                      <div className="hiImKaan">• TD Bank</div>
                      <div className="hiImKaan">
                        Automated the financial account application process on
                      </div>
                      <div className="hiImKaan">
                        Salesforce with Java, Selenium and Cucumber with the
                      </div>
                      <div className="hiImKaan">
                        main goal of reducing application time
                      </div>
                      <br></br>
                      <div className="hiImKaan">
                      • Hitachi
                      </div>
                      <div className="hiImKaan">
                        Implemented SQL Normalization to streamline weekly
                      </div>
                      <div className="hiImKaan">
                        tasks list for employees in the company.
                      </div>
                      <div className="hiImKaan">
                        Created a website using React, Javascript and CSS to
                      </div>
                      <div className="hiImKaan">
                        visualize financial databases internally for stakeholders
                      </div>
                      <br></br>
                      <br></br>
                      <div className="hiImKaan">languages, tools and frameworks I have used in a work setting:</div>
                      <div className="hiImKaan">
                        Java, Python, Cucumber, Selenium, Appium, Rest, JIRA, SQL,
                      </div>
                      <div className="hiImKaan">
                        Javascript, React.js, Node.js, HTML, CSS, AWS, Apache, Hadoop
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