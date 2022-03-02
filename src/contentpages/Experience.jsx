import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Image } from 'primereact/image';

import FsiteImage from '../assets/FSiteShare.JPG';
import BujinkanSakuraDojo from '../assets/BujinkanSakuraDojo.JPG';
import CommissionPrices1 from '../assets/CommissionPrices_Beth.png';
import Commissionprices2 from '../assets/CommissionPrices2_Beth.png';
import KatkonKarhutLogo from '../assets/KatkonKarhut_Logo_Painokuva_1.1.1.png';
import TheLastHorseman from '../assets/TheLastHorseman.JPG';
import KunnallisvaaliEsite from '../assets/VaaliEsite_VasLiit_VaronenLauri_1.2.png';

function Experience(props) {
    const experience = [
        {
            name: 'Website development for Bujinkan Sakura Dojo',
            desc: <> Development of a WordPress-based homepage for a martial arts organization. My role was to provide graphic design elements and to assist in managing the creation of the frontend of the website.
                <br/><br/><a href="http://www.bujin.fi/">Link to the website.</a></>,
            date: '2021',
            image: BujinkanSakuraDojo,
            icon: 'pi pi-spin pi-server',
            color: 'blue'
        }, {
            name: 'UI Design for FSiteShare',
            desc: <> PHP-based web-gallery application. My role in the project was to oversee UI/UX design to ensure optimal functionality from the user-end perspective.
                <br/><br/><a href="https://fsiteshare.rm-studio.fi/index">Link to the application.</a> Username is "guest" and password is "guest". </>,
            date: '2019',
            image: FsiteImage,
            icon: 'pi pi-spin pi-server',
            color: 'blue'
        }, {
            name: 'Graphic Design for a Commission Sheet',
            desc: <>Creation of a price sheet designed to use for freelance illustration work based on a commission system. My role was to design and create the commission sheets to reflect the services provided by the artist and to
                showcase their work within the sheets relevant to each price category.</>,
            date: '2019',
            image: CommissionPrices1,
            icon: 'pi pi-spin pi-image',
            color: 'blue'
        }, {
            name: 'Graphic Design for a Logo',
            desc: <>Design and illustration of a logo designed to use as the logo for a student group within the faculty of education at Turku University. My role was to ideate and illustrate the logo and have it printed on the student overalls.
                I designed logos for each year from 2018 to 2020.</>,
            date: '2018-2020',
            image: KatkonKarhutLogo,
            icon: 'pi pi-spin pi-image',
            color: 'blue'
        }, {
            name: 'Frontend development and UI/UX/Graphic Design for a game demo',
            desc: <></>,
            date: '2018',
            image: '',
            icon: 'pi pi-spin pi-server',
            color: 'blue'
        }, {
            name: 'Graphic Design for Municipal Election Brochure',
            desc: <>Design of a brochure meant for municipal elections. My role included creating the brochure from ground-up within the limitations set by the The Left Alliance's design outlines such as using a certain set of pre-approved colours.</>,
            date: '2017',
            image: KunnallisvaaliEsite,
            icon: 'pi pi-spin pi-image',
            color: 'blue'
        }, {
            name: 'Website development for The Last Horseman -webcomic',
            desc: <> Development of a WordPress/ComicPress-based webcomic site 'The Last Horseman'. My role was to adjust and modify the visual and UI -elements of the site to better reflect the content and functionality.
                <br/><br/><a href="http://thelasthorseman.net/">Link to the website.</a></>,
            date: '2016',
            image: TheLastHorseman,
            icon: 'pi pi-spin pi-server',
            color: 'blue'
        }]

    return (
        <div id="experiencePage">
            <h1 style={{textAlign: 'center', marginBottom: '60px', fontSize: '30px'}}> Professional Experience </h1>
            <Timeline
                value={experience}
                align="alternate"
                marker={(item) => <i className={item.icon} style={{color: item.color}}/>}
                content={(item) => (
                <div className="experienceItemWrapper">
                    <div>
                        <h3 className="experienceItemHeader">{item.name} </h3>
                        <div className="ingressText experienceYear"> {item.date} </div>
                        <div><Image preview={true} imageStyle={{maxWidth:'450px'},{maxHeight: '300px'}} src={item.image} alt="" /></div>
                        <div> {item.desc} </div>
                    </div>

                </div>
            )} />
            {/*experience.map((item,index) => (
                <div className="experienceItemWrapper">
                    <div>
                        <img src={item.img} alt={item.imgalt} />
                    </div>

                    <div>
                        <h3>{item.name} </h3>
                        <div className="ingressText experienceYear"> {item.year} </div>
                        <div> {item.desc} </div>
                    </div>

                </div>
            ))*/}
        </div>

    )
}
export default Experience;
