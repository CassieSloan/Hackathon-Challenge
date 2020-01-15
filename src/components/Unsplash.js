import React, { Component } from "react";
import axios from "axios";

class Unsplash extends Component {
    render() {

        const fetchWater = async () => {
            await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: "water" },
            headers: {
                Authorization: 'Client-ID 1e879569e8ae76d56bed858949e9c98a062760c982e7cef677e3895a784d8a28'
            }
        }).then((image) => console.log(image.data.results))
            
            console.log("this is the fetchWaterfunction");
        }

        const fetchNature = async () => {
            await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: "nature" },
            headers: {
                Authorization: 'Client-ID 1e879569e8ae76d56bed858949e9c98a062760c982e7cef677e3895a784d8a28'
            }
        }).then((image) => console.log(image.data.results))
            
            console.log("this is the fetchNature function");
        }

        const fetchAnimal = async () => {
            await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: "animals" },
            headers: {
                Authorization: 'Client-ID 1e879569e8ae76d56bed858949e9c98a062760c982e7cef677e3895a784d8a28'
            }
        }).then((image) => console.log(image.data.results))
            
            console.log("this is the fetchAnimal function");
        }

        return (
            <>
            <h1>prints</h1>
            <div>
                <h2>Press the button</h2>
                    <button onClick={fetchWater} type="button">Water</button>
                    <button onClick={fetchNature} type="button">Nature</button>
                    <button onClick={fetchAnimal} type="button">Animal</button>
                        <img src="examplephoto.jpg" alt="Tree" width="300" height="200"></img>
            </div>
            </>
        )
    }
}

export default Unsplash