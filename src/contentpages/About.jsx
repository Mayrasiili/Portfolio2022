import React from 'react';
import { Fieldset } from 'primereact/fieldset';

function About(props) {
    return (
        <div id="aboutPage">
            <h1> About </h1>
            <Fieldset legend="Technologies used">
                <ul>
                    <li>Basic Web Technologies (HTML5, CSS3, JavaScript) </li>
                    <li>ReactJS </li>
                    <li>PrimeReact UI Framework </li>
                    <li>PrimeTek PrimeIcons library </li>
                </ul>
            </Fieldset>

            <h1> Contact Information </h1>
            <Fieldset legend="Email Address">
                <h4><a href="mailto:honkanen.henrik.jaakko@gmail.com" style={{textDecoration:'none'}}>honkanen.henrik.jaakko@gmail.com</a></h4>
            </Fieldset>
        </div>

    )
}
export default About;
