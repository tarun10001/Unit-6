function Navbar () {
    return `
<div id="nav_container">

<div id="logo_container">
    <img src="https://s.imgur.com/images/logo-1200-630.jpg?2" onclick="window.location.href='index.html'" alt="" />
<button style="font-size: 18px" id="newpost">
    <i class="fa fa-plus newpostbtn"></i>New post</button>
</div>

<div id="input_container"> 
    <input type="text" placeholder="Images, #tags, @uses oh my!"
    id="query">
    <button id="search">
        <i class="fa fa-search" aria-hidden="true" id="search"></i>
    </button>
</div>

<div id="btn_container">
<button id="book"><i class="fa fa-bookmark"></i></button>
<button id="Go-Ad-Free">Go Ad-Free</button>
<button id="sign-in">Sign In</button>
<button id="sign-up">Sign up</button>
</div>
</div>
<div id="searchDataDisplay"></div>
`
}


export default Navbar;
