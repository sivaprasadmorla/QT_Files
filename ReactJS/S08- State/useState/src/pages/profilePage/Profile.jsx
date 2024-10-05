import { useState } from "react"
import "./Profile.css"

function Profile(){
    let [name,setName] = useState("Prashanth")
    let [gender,setGender] =useState('male')
    let [image,setImage] = useState("https://th.bing.com/th/id/OIP.CYt-sI4Rk88etVn0zt32PQHaLH?rs=1&pid=ImgDetMain")
    
    let showPrashanth = ()=>{
        setName('Prashanth')
        setGender('male')
        setImage("https://th.bing.com/th/id/OIP.CYt-sI4Rk88etVn0zt32PQHaLH?rs=1&pid=ImgDetMain")
    }

    let showRhea =()=>{
        setName("Rhea")
        setGender('Female')
        setImage("https://th.bing.com/th/id/OIP.0iG7xinjnxYwduQCGJs1rQHaKX?rs=1&pid=ImgDetMain")
    }



    return (
        <div className="profile-container">
            <div className="profileImage">
                <img src={image} alt="image" />
            </div>
            <div className="ProfileDetails">
                <dl>
                    <dt>Name</dt>
                    <dd>{name}</dd>
                    <dt>Gender</dt>
                    <dd>{gender}</dd>
                    <dt>Description</dt>
                    <dd>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptas quisquam eveniet rem repellendus veniam reprehenderit ab in exercitationem quibusdam illo, tempora beatae provident repudiandae eaque temporibus, et aperiam! Voluptatibus, ut. Iste temporibus aut esse necessitatibus, nihil mollitia non veritatis amet vero. Quidem, praesentium neque? Odit deleniti corrupti tempora culpa?</dd>
                </dl>
                <button onClick={showPrashanth}>Prashanth</button>
                <button onClick={showRhea}>Rhea</button> <br />
                <input type="checkbox" id="check" value={state}/>
                <label htmlFor="check"> change the Background</label>
            </div>
        </div>
    )
}

export default Profile