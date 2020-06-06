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
            <div className="white_line"><br/><br/></div>
            <div className="block_h">
                <div id='hp'>
                    <img id={"ph"} src={require('../pictures/3.png')} height="300px" alt="ifo"/>
                </div>
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
            </div>
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
                    <img id={"ph"} src={require('../pictures/3.png')} height="300px" alt="ifo"/>
                </div>
            </div>
            <div className="white_line"><br/><br/></div>
            <div className="block_h">
                <div id='hp'>
                    <img id={"ph"} src={require('../pictures/3.png')} height="300px" width="500px" alt="ifo"/>
                </div>
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
            </div>
            <div className={"credit_form"}>
                <p>2020 HealthNextDoor © All Rights Reserved</p>
            </div>
        </div>
    );
}
