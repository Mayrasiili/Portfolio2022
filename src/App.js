import React from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menu } from 'primereact/menu';

import Introduction from './contentpages/Introduction.jsx';
import Proficiencies from './contentpages/Proficiencies.jsx';
import Experience from './contentpages/Experience.jsx';
import About from './contentpages/About.jsx';


function App() {
    const [page, setPage] = React.useState('Introduction');
    const items = [
        {
            label: 'About Me',
            items: [
                {label: 'Introduction', icon: 'pi pi-fw pi-id-card', command: () => setPage('Introduction'), className: page === 'Introduction' ? 'menuActive' : ''},
                {label: 'Proficiencies', icon: 'pi pi-fw pi-palette', command: () => setPage('Proficiencies'), className: page === 'Proficiencies' ? 'menuActive' : ''},
                {label: 'Experience', icon: 'pi pi-fw pi-briefcase', command: () => setPage('Experience'), className: page === 'Experience' ? 'menuActive' : ''}
            ]
        },
        {
            label: 'Technologies Used',
            items: [
                {label: 'About', icon: 'pi pi-fw pi-info-circle', command: () => setPage('About'), className: page === 'About' ? 'menuActive' : ''}
            ]
        }
    ]
    return (
        <div className="App">
            <section id="menusection">
                <div id="menuheader">
                    <h2> Menu </h2>
                </div>
                <Menu model={items} />
            </section>
            <section id="contentsection">
                <div className="contentWrapper">
                    {page === 'Introduction' && <Introduction />}
                    {page === 'Proficiencies' && <Proficiencies />}
                    {page === 'Experience' && <Experience />}
                    {page === 'About' && <About />}
                </div>

            </section>
        </div>
    );
}

export default App;
