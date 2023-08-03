import React, { useState } from "react";


const CloudImage = () => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false)
    const uploadImage = async (e) => {
        e.preventDefault();
        const files = e.target.files;
        const data = new FormData();
        imageFormData.append("file", files[0]);
        imageFormData.append("upload_preset", "phones");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/djqwbu0my/Activities/upload",
            {
                method: "POST",
                body: imageFormData,
            }
        );
        const file = await res.json();
        setImage(file.secure_url);
        console.log(file.secure_url)
        setLoading(false);
    }
    return file.secure_url
};
export default CloudImage;