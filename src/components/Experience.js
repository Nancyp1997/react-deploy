import React from 'react';
import './Cards.css';

function Experience() {
  return (
    <>
      <div className='cards'>
        <h1 className='expheading'>EXPERIENCE</h1>
        <br /><br/>
        <hr className='partition' />
  
        <div className='cards__container'>
          
          <div className='cards__wrapper'>

            <div className='company'>

              <div className='cName'>

                <h3>COMVIVA</h3>
              </div>
              <div className='desc'>
                
                  <ul> 
                    <li>Feature development and enhancement using Java, Struts framework, MySQL.</li>
                    <li>Call Data Records formatting via Perl scripts.</li>
                    <li>Graph plotting and report generation with interactive views and drill downs for network traffic
                      and SMS firewall statistics via nodeJS framework.</li>
                    <li>Security vulnerability fixes , debugging field issues and update build as per business requirements.</li>
                    <li>Ansible scripting for automating generation and deployment of latest builds. Generated system config audit tool UI for
                      comparing system’s current state with the fine tuned performance via Python and Ansible.</li>
                  </ul>
               
              </div>

            </div>
            <div className='company'>
              <div className='cName'>
                <h3>KIVITECH</h3>
              </div>

              <div className='desc'>
                
                  <ul>
                    <li>Developed KiviHealth, iPhone app, for patients to book appointments with doctors, maintain appointment history and  health records.</li>
                    <li>Integrated Apple HealthKit and social login</li>
                    <li>Added handwriting recognition and speech to text conversion features. </li>
                    <li>Released on App store.</li>
                    <li>Developed KiviDocTab, iPad app, written in Swift, for doctors to manage appointments and multiple clinics.</li>
                  </ul>
                
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Experience; 