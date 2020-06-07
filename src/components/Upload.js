import React,{useState}from "react";
import {updateimage} from "../api"
import Button from "./Button";
export default function Upload() {
    const [image,setImage] = useState('');
    const [loading, setLoading] = useState(false);
    var selectedFile;
    const fileSelectedHandler = event => {
        selectedFile = event.target.files[0];
        console.log(event.target.files[0]);
    };

    const uploadImage = async e => {
        //const files = e.target.files;
        const data = new FormData();
        data.append('file', selectedFile);
        data.append('upload_preset', 'xuxuxue');
        setLoading(true);
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dzkvgzgjh/image/upload',
            {
                method: 'POST',
                body: data
            }
        );
        const file = await res.json();

        setImage(file.secure_url);
        console.log(file.secure_url);
        setLoading(false);
        await updateimage(file.secure_url);
    };


    return(
        <div >
            <label className="update_input"> Upload Image</label>
            <input type="file" name ="file" placeholder="Upload an image" onChange={fileSelectedHandler}/>
            <Button className="login_button" onClick={uploadImage}>
                Upload
            </Button>
            {loading ?(
                <label className="update_input"> Loading</label>
            ):(
                <img src={image} style={{width:'300px'}}/>
                    )}
        </div>
    );
}


