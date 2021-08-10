import React from "react";
import './style.css'

import CodeIcon from '@material-ui/icons/Code';
import IconButton from "@material-ui/core/IconButton";
import DnsIcon from '@material-ui/icons/Dns';
import ExtensionIcon from '@material-ui/icons/Extension';

function TechnologyCard() {

    return (
        <div className='techCardGrid'>
            <h3 className='techDivHeader'>Technological Experience</h3>
                <div className='technologies'>
                    <IconButton className='iconFooter'>
                        <CodeIcon style={{color: "white"}} />
                    </IconButton>
                    <ul>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </ul>
                </div>
                <div className='technologies'>
                    <IconButton className='iconFooter'>
                        <DnsIcon style={{color: "white"}} />
                    </IconButton>
                    <ul>
                        <p>MySQL</p>
                        <p>Sequelize.js</p>
                        <p>Node.js</p>
                        <p>MongoDB</p>
                        <p>Mongoose</p>
                    </ul>
                </div>
                <div className='technologies'>
                    <IconButton className='iconFooter'>
                        <ExtensionIcon style={{color: "white"}} />
                    </IconButton>
                        <ul>
                            <p>React.js</p>
                            <p>Handlebars.js</p>
                            <p>BCrypt</p>
                            <p>Socket.io</p>
                            <p>React.js</p>
                        </ul>
                </div>
        </div>
    );
};

export default TechnologyCard;