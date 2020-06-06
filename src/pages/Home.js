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
                    <img id={"ph"} src={require('../pictures/xuxu1.png')} height="300px" alt="ifo"/>
                </div>
                <div id='inform'>
                    <div id='title'>
                        What is home care?
                    </div>
                    <div id='content'>
                        “I don’t want to put Mum or Dad in a home.”
                        <p>The good news is you don’t have to. With home care, our trusted experienced caregivers and
                            nurses come to you so your loved one can get home care right under their own roof.</p>
                    </div>
                </div>
            </div>
            <div className="white_line"><br/><br/></div>
            <div className="block_h">
                <div id='inform'>
                    <div id='title'>
                        Making Lives Better with Home Care
                    </div>
                    <div id='content'>
                        <p>With a positive outlook and an ability to stay comfortably at home, you’re empowered to keep living your life to its fullest.

                        </p>
                        <p>Our caregivers do things that bring happiness to your loved ones–no matter how big or small providing home care that’s Making Lives Better, in your own home, on your own terms.</p>
                    </div>
                </div>
                <div id='hp'>
                    <img id={"ph"} src={require('../pictures/xuxu2.png')} height="300px" alt="ifo"/>
                </div>
            </div>
            <div className="white_line"><br/><br/></div>
            <div className="block_h">
                <div id='hp'>
                    <img id={"ph"} src={require('../pictures/xuxu3.png')} height="300px" width="500px" alt="ifo"/>
                </div>
                <div id='inform'>
                    <div id='title'>
                        Life is better when caregivers come to you
                    </div>
                    <div id='content'>
                        <p>Having a caregiver come to your home should be reassuring, not overwhelming. We manage
                            everything, every step of the way. Let your daughter be your daughter.
                            </p>
                    </div>
                </div>
            </div>
            <div className={"credit_form"}>
                <p>2020 HealthNextDoor © All Rights Reserved</p>
            </div>
        </div>
    );
}
