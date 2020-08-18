var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function UserDecorator(template, domSelector) {
    return function (constructor) {
        const domElement = document.getElementById(domSelector);
        const myUserCard = new UserCard('Kaloyan Simeonov', 'Web Developer', ['PHP', 'Angular'], ['Linux', 'Windows'], 3, 4, 5);
        if (domElement) {
            domElement.innerHTML = template;
            domElement.querySelector('#name span').textContent =
                myUserCard.name;
            domElement.querySelector('#profile span').textContent =
                myUserCard.profile;
            domElement.querySelector('#skills span').textContent =
                myUserCard.skills.join(', ');
            domElement.querySelector('#platform span').textContent =
                myUserCard.platform.join(', ');
            ;
            domElement.querySelector('#fans span').textContent =
                myUserCard.fans.toString();
            domElement.querySelector('#following span').textContent =
                myUserCard.following.toString();
            domElement.querySelector('#followers span').textContent =
                myUserCard.followers.toString();
        }
    };
}
let UserCard = class UserCard {
    constructor(name, profile, skills, platform, fans, following, followers) {
        this.name = name;
        this.profile = profile;
        this.skills = skills;
        this.platform = platform;
        this.fans = fans;
        this.following = following;
        this.followers = followers;
        name = this.name;
        profile = this.profile;
        skills = this.skills;
        platform = this.platform;
        fans = this.fans;
        following = this.following;
        followers = this.followers;
    }
};
UserCard = __decorate([
    UserDecorator(`
        <div">

            <h1 id="name">Name: <span></span></h1>
            <h3 id="profile">Profile: <span></span></h3>
            <h3 id="skills">Skills: <span></span></h3>
            <h3 id="platform">Platforms: <span></span></h3>

            <div style="width: 600px;">
            
            <div style="float:left; width: 180px" id="fans"><span></span></div>
            <div style="float:left; width: 180px" id="following"><span></span></div>
            <div style="float:left; width: 180px" id="followers"><span></span></div">
            
            </div>

            <div style="width: 600px;">

            <div style="float:left; width: 180px">Fans<b></b></div>
            <div style="float:left; width: 180px">Following</div>
            <div style="float:left; width: 180px">Followers</div">

            </div>

            <div style="width: 600px;">

            <div style="float:left; width: 180px"><a href="https://www.facebook.com/Simeono0ow">Like</a></div>
            <div style="float:left; width: 180px"><a href="https://www.linkedin.com/in/kaloyan-simeonov-102bb917b/">Connect</a></div>
            <div style="float:left; width: 180px"><a href="https://www.instagram.com/simeonov.kaloyan7/">Follow</a></div">

            </div>
        </div>
    `, 'UserCard')
], UserCard);
