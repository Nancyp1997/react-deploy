import React from 'react';
import './Cards.css';
import Skill from './Skill';

function Experience() {
    return (
        <> 
            <div className='cards'>
                <h1 className='expheading'>SKILLS</h1>
                <br />
                <hr />
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <div className='float-container'>
                        <div className='float-child'>
                        <h3>FRAMEWORKS</h3><br/>
                            <Skill name='Struts' progress='80' message=' ' />
                            <Skill name='Spring' progress='80' message=' ' />
                            <Skill name='Maven' progress='80' message=' ' />
                            <Skill name='Hibernate' progress='80' message=' ' />
                            <br/>
                        
                            <h3>AREAS OF INTEREST</h3><br/>
                            <Skill name='ML' progress='80' message=' ' />
                            <Skill name='iOS App Dev' progress='80' message=' ' />
                            <Skill name='Backend Dev' progress='80' message=' ' />
                            {/* <Skill name='Swift' progress='70' message=' ' /> */}
                            <br/>
                            
                            <h3>DEPLOYMENT</h3><br/>
                            <Skill name='Ansible' progress='60' message=' ' />
                        </div>
                        <div className='float-child'>
                        <h3>LANGUAGES</h3><br/>
                            <Skill name='Java' progress='80' message=' ' />
                            <Skill name='Python' progress='80' message=' ' />
                            <Skill name='R' progress='80' message=' ' />
                            <Skill name='Swift' progress='70' message=' ' />
                            <br/>
                            <h3>VERSION CONTROL</h3><br/>
                            <Skill name='Git' progress='90' message=' ' />
                            <Skill name='SVN' progress='60' message=' ' />
                            <br/><br/><br/>
                           
                            
                        </div>
                        </div>
                    


                    </div>
                </div>

                <h1 className='expheading'>EDUCATION</h1>
                <br/>
                <hr/>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <div className='float-container'>
                            <div className='float-child'>
                                <h3>UIC(Fall 21- )</h3>
                                <p className='courseName'>Chicago, USA.</p>
                                {/* <p className='courseName'></p> */}
                                <ul className='courseList'>
                                    <li>MS CS </li> 
                                </ul>
                                
                                
                            </div>
                            <div className='float-child'>
                                <h3>DAIICT </h3>
                                <p className='courseName'>Gujarat, India.(2014-18)</p>
                                {/* <p className='courseName'>2014-18</p> */}
                                {/* <Skill name='Probability' progress='0' message=' ' /> */}
                                <ul className='courseList'>
                                    <li>B.Tech ICT </li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
}

export default Experience;