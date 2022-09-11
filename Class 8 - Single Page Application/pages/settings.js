import { userService } from "../user/user.service.js";

export default class Settings {
    constructor(){
        this.render();
        this.addEventListeners();
        this.changeUsername(userService.user.username)
    }

    render(){
        let appElem = document.getElementById("app");

        appElem.insertAdjacentHTML(
            'beforeend',
            `<h1 class='text-center'>Settings</h1>
            
            <div class="container">
            <form>
                <div class="mb-3">
                    <label class="form-label" id="user-label">username: </label>
                    <input type="text" class="form-control" id="user-input">
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary" id="settings-btn">Submit</button>
                </div>
            </form>
            </div>     
            `
        );   
    }

    addEventListeners(){
        // Declare variables
        let settingsBtnElem = document.getElementById('settings-btn');

        settingsBtnElem.addEventListener('click',(event)=>{
            event.preventDefault();
            let newUsername = document.getElementById('user-input').value
            this.changeUsername(newUsername);
            userService.next(newUsername)
        })
    }

    changeUsername(username){
        let userLabelElem = document.getElementById('user-label');

        userLabelElem.innerText = `username: ${username}`
    }
}