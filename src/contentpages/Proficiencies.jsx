import React from 'react';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';

function Proficiencies(props) {
    return (
        <div id="proficienciesPage">
            <h1> Proficiencies </h1>
            <Panel className="proficiencyPanel" header="UI/UX Design" toggleable={true}>
                <Card className="proficiencyCard" title="Material Design Principles" subTitle="Good understanding of Material Design and associated principles">
                    Ability to use Material Design to influence and improve UI/UX design, including but not limited to: color, typography and shape, and the design language inherent to Material Design.
                </Card>
                <Card className="proficiencyCard" title="Information Architecture Principles" subTitle="Excellent understanding of information organization">
                    Ability to organize information in ways that are user-friendly and easy to understand. Degree in education enchances ability to understand information layouts and processes which
                    further improves understanding of UI/UX design.
                </Card>
                <Card className="proficiencyCard" title="Visual Communication Principles" subTitle="Fluent understanding of principles related to visual communication">
                    Reliable knowledge and ability to analyze visual design and language to create better UI/UX environments, knowledge of a wide variety of related theoretical principles including
                    but not limited to: Layout, Color, Typography, Images, Design and Color theory.
                </Card>
            </Panel>
            <Panel className="proficiencyPanel" header="Graphic Design" toggleable={true}>
                <Card className="proficiencyCard" title="Adobe Graphic Programs" subTitle="Photoshop, Illustrator & InDesign">
                    Good skills with Adobe graphical products. Ability to create Graphic Designs used in web environments and Frontend design, such as vector-based images and visual imagery to accompany UI/UX design.
                </Card>
                <Card className="proficiencyCard" title="Graphic Design Principles" subTitle="Typography, Print Design, Photgraphy, Branding & Web Design">
                    Solid understanding of principles of Graphic Design from the point of view of visual arts. Knowledge of fields of visual art theory used in Graphic Design both in print and web design.
                </Card>
            </Panel>
            <Panel className="proficiencyPanel" header="Frontend Technologies" toggleable={true}>
                <Card className="proficiencyCard" title="JavaScript" subTitle="Understanding of the programming language up to ES6">

                </Card>
                <Card className="proficiencyCard" title="React" subTitle="Knowledge of basic development with React">

                </Card>
                <Card className="proficiencyCard" title="HTML5" subTitle="Fluent understanding of the markup language">

                </Card>
                <Card className="proficiencyCard" title="CSS3" subTitle="Solid ability to style document objects">

                </Card>
                <Card className="proficiencyCard" title="Node.js" subTitle="Ability to create and work with Node.js -projects">

                </Card>
                <Card className="proficiencyCard" title="Web Debugging Tools" subTitle="Ability to use Firebug/similar to debug websites">

                </Card>
            </Panel>
            <Panel className="proficiencyPanel" header="Other" toggleable={true}>
                <Card className="proficiencyCard" title="Operating Systems" subTitle="Windows">
                    Built development environments in Windows.
                </Card>
                <Card className="proficiencyCard" title="Microsoft Office 365" subTitle="Exellent understanding of Office 365 -programs">
                    Microsoft Word, Excel, PowerPoint, OneNote and Outlook.
                </Card>
                <Card className="proficiencyCard" title="Classical logic" subTitle="In-depth studies of classical logic">
                    Studies in philosophy relating to classical logic on university level.
                </Card>
                <Card className="proficiencyCard" title="Git" subTitle="Ability to work with projects hosted in a Git-server">

                </Card>
            </Panel>
        </div>
    )
}
export default Proficiencies;
