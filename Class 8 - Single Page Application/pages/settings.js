export default class Settings {
    constructor(){
        this.render();
    }


    render() {
        let appElem = document.getElementById('app');
        appElem.innerHTML += `
        <h1 class='text-center'>Settings</h1>
        `
    }
}