import React from "react";
import HomePage from "../components/HomePage";

export default function Home() {
    return (
        <div>
            <HomePage/>
            <div className="white_line"><br/><br/></div>
            <div className="block_h">
            <div id='inform'>
                <div id='title'>
                    what is dementia?
                </div>
                <div id='content'>
                Dementia describes a collection of symptoms that are caused by disorders affecting the brain.
                It is not one specific disease. Dementia affects thinking, behaviour and the ability to perform everyday tasks.
                Brain function is affected enough to interfere with the person’s normal social or working life.
                    </div>
                </div>
            <div id='hp'>
            <img id={"ph"} src={require('../pictures/hp.jpg')} alt="ifo"/>
            </div>
                </div>
            contact us<br/><br/>
            term and condition
        </div>
    );
}
