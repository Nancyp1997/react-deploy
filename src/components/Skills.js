import React from 'react';
import './Cards.css';
import Skill from './Skill';
import '../App.css';

function Experience() {
    return (
        <>
            <div className='cards'>
                <h1 className='expheading'>SKILLS</h1>
                <br />
                <hr class='partition'/>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <div className='float-container'>
                            <div className='float-child'>
                            <div className='skillset'>
                                <h3>FRAMEWORKS</h3>
                                <Skill name='Struts' progress='80' message=' ' />
                                <Skill name='Spring' progress='80' message=' ' />
                                <Skill name='Maven' progress='80' message=' ' />
                                <Skill name='Hibernate' progress='80' message=' ' />
                                </div>
                                <br />
                                <div className='skillset'>
                                <h3>AREAS OF INTEREST</h3>
                                <Skill name='ML' progress='80' message=' ' />
                                <Skill name='iOS App Dev' progress='80' message=' ' />
                                <Skill name='Backend Dev' progress='80' message=' ' />
                                </div>
                                {/* <Skill name='Swift' progress='70' message=' ' /> */}
                                <br />
                                <div className='skillset'>
                                <h3>DEPLOYMENT</h3>
                                <Skill name='Ansible' progress='60' message=' ' />
                                </div>
                            </div>
                            <div className='float-child'>
                                <div className='skillset'>
                                <h3>LANGUAGES</h3>
                                <Skill name='Java' progress='80' message=' ' />
                                <Skill name='Python' progress='80' message=' ' />
                                <Skill name='R' progress='80' message=' ' />
                                <Skill name='Swift' progress='70' message=' ' />
                                </div>
                                <div className='skillset'>
                                <h3>VERSION CONTROL</h3><br />
                                <Skill name='Git' progress='90' message=' ' />
                                <Skill name='SVN' progress='60' message=' ' />
                                </div>
                                <br /><br /><br />


                            </div>
                        </div>



                    </div>
                </div>

                <h1 className='expheading'>EDUCATION</h1>
                <br />
                <hr className='partition'/>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <div className='float-container'>
                            <div className='float-child'>
                                <div className='school'>
                                    <h3>UIC(Fall 21- )</h3>
                                    {/* <p className='courseName'>Chicago, USA.</p> */}
                                    {/* <p className='courseName'></p> */}
                                    <ul className='courseList'>
                                        <li>MS CS </li>
                                    </ul>
                                </div>

                            </div>
                            <div className='float-child'>
                                <div className='school'>
                                    <h3>DAIICT [2014-18] </h3>
                                    {/* <p className='courseName'>Gujarat, India.(2014-18)</p> */}
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
            </div>
            <br />
        </>
    );
}

export default Experience;