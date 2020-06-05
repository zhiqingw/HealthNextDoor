import React,{useState}from "react";
import {updateimage} from "../api"
export default function Upload() {
    const [image,setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
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
            <input type="file" name ="file" placeholder="Upload an image" onChange={uploadImage}/>
            {loading ?(
                <label className="update_input"> Loading</label>
            ):(
                <img src={image} style={{width:'300px'}}/>
                    )}
        </div>
    );
}