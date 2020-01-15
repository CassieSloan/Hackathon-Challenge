import React, { Component } from "react";
import axios from "axios";

class Unsplash extends Component {
    state = {imageURL: ""}
    render() {


        const fetchWater = async () => {
            const random = [1,2,3,4,5,6,7,8,9,10]
            const randomNumber = random[Math.floor(Math.random()*random.length)];
            await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: "water" },
            headers: {
                Authorization: 'Client-ID 1e879569e8ae76d56bed858949e9c98a062760c982e7cef677e3895a784d8a28'
            }
        }).then((image) => {
            this.setState({imageURL: image.data.results[randomNumber].urls.regular} )
            })
        }

        const fetchNature = async () => {
            const random = [1,2,3,4,5,6,7,8,9,10]
            const randomNumber = random[Math.floor(Math.random()*random.length)];
            await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: "nature" },
            headers: {
                Authorization: 'Client-ID 1e879569e8ae76d56bed858949e9c98a062760c982e7cef677e3895a784d8a28'
            }
        }).then((image) => {
            this.setState({imageURL: image.data.results[randomNumber].urls.regular} )
            })
        }

        const fetchAnimal = async () => {
            const random = [1,2,3,4,5,6,7,8,9,10]
            const randomNumber = random[Math.floor(Math.random()*random.length)];
            await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: "animals" },
            headers: {
                Authorization: 'Client-ID 1e879569e8ae76d56bed858949e9c98a062760c982e7cef677e3895a784d8a28'
            }
        }).then((image) => {
            this.setState({imageURL: image.data.results[randomNumber].urls.regular} )
            })
        }

        return (
            <>
            <h1>prints</h1>
            <div>
                <h2>Press the button</h2>
                    <button onClick={fetchWater} type="button">Water</button>
                    <button onClick={fetchNature} type="button">Nature</button>
                    <button onClick={fetchAnimal} type="button">Animal</button>
                        <img src={this.state.imageURL} alt="Tree" width="300" height="200"></img>
            </div>
            </>
        )
    }
}

export default Unsplash