import React from 'react';
import { Divider } from 'primereact/divider';

import Jaakkonaama from '../assets/GoodFace.PNG';

function Introduction(props) {
    return (
        <div id="introductionPage">
            <div id="introductionImage">
                <img src={Jaakkonaama} alt="An image of me" />
            </div>

            <div id="introductionBody">
                <h1 className="titleText"> Jaakko Honkanen </h1>
                <div className="ingressText">UI/UX/Graphic Designer, Frontend Developer </div>
                <Divider />
                <p>
                I am Jaakko Honkanen, a Frontend developer interested in UI/UX and Graphic design. My interest arose from personal projects at first, but over the years I have worked on various other projects, including non-personal ones.
                This website exists to detail my experience and education, as well as to showcase my abilities as a Frontend developer in terms of coding and design.
                </p>
                <Divider type="dashed" />
                <p>
                I studied education in the university of Turku and graduated as a Master of Education in 2020. During my studies, I minored in philosophy and art studies, including graphic design and classical logic. These studies enhanced
                my interest and knowledge in UI/UX design and Frontend development, but my interest in the topic precedes my studies, as the earliest project I undertook was before I officially began studying. My interest in graphic design
                precedes my studies as well, as I have practiced many visual media skills and have worked as a freelance graphic design before my university studies.
                </p>
                <Divider type="dashed" />
                <p>
                My personal projects include website and game design, as well as several graphic design projects of smaller scale. Outside of that, I have worked from time to time with non-personal projects, which also include graphic and
                website design. I have also worked as a research assistant in the Department of Education at the university of Turku from 2017 to 2018, focusing on data collection, management and cloud storage management as well as maintaining
                communication in an international research group between Finland, Sweden and New Zealand. I have assisted in smaller-scale projects as a UI/UX designer and I am constantly working to improve and maintain up-to-date skills on all
                these fronts.
                </p>
                <Divider />
            </div>
        </div>
    )
}
export default Introduction;
