import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarItemData {
    url: string;
    description: string;
    isActive: boolean;
}

function NavbarItem(item: NavbarItemData) {
    const customClassName = item.isActive ? "active" : "inactive";
    return <Link className={customClassName} to={item.url}>{item.description}</Link>
}

export function Navbar() {

    const navbarItems =
        [{
            "url": "/",
            "description": "Survey List",
            "isActive": true
        },
        {
            "url": "/create-survey",
            "description": "Create Survey",
            "isActive": false
        },
        {
            "url": "/MySurveys",
            "description": "My Surveys",
            "isActive": false
        },
        {
            "url": "/Profile",
            "description": "Profile",
            "isActive": false
        }];

    return (
        <div className="nav">
            <Link to="/" className="logo">Survey Genarator</Link>
            {navbarItems.map((item) => {
                return NavbarItem(item);
            })}
        </div>
    )
}
