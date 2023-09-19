'use client'
import React, {useState} from 'react';


const Upload = () => {
const [file, setFile] = useState();
function handleChange(e){
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

}
    return ( 
    <>
			<input type="file" name="file" onChange={handleChange} />
			<div>
				{/* <button onClick={handleSubmission}>Submit</button> */}
                <img src={file} />

			</div>
		</>
    );
}
 
export default Upload;