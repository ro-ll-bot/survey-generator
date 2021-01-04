import { useState } from "react";

export function Navbar() {

    const navbarItems=
        [{
            "url": "#SurveyList",
            "description": "Survey List",
            "isActive": true
        }, 
        {
            "url": "#CreateSurvey",
            "description": "Create Survey",
            "isActive": false
        }, 
        {
            "url": "#MySurveys",
            "description": "My Surveys",
            "isActive": false
        }, 
        {
            "url": "#Profile",
            "description": "Profile",
            "isActive": false
        }];

    return (
            <div className="nav">
                <a href="#" className="logo" >Survey Genarator</a>
                {navbarItems.map((item)=>{
                    if(item.isActive)
                        return <a className="active" href={item.url}>{item.description}</a>
                    else
                        return <a href={item.url}>{item.description}</a>
                })}
            </div>
    )
}
