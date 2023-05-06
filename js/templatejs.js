document.getElementById('loginbutton').addEventListener('click',function() {
    document.querySelector('.logincontainer').style.display="flex";
})

document.getElementById('loginpagesignuplink').addEventListener('click',function() {

    document.querySelector('.logincontainer').style.display="none";

    document.querySelector('.signupcontainer').style.display="flex";

})


document.getElementById('signupbutton').addEventListener('click',function() {
    document.querySelector('.signupcontainer').style.display="flex";
})

document.getElementById('signuppageloginlink').addEventListener('click',function() {

    document.querySelector('.signupcontainer').style.display="none";

    document.querySelector('.logincontainer').style.display="flex";
    
})

document.querySelector('.loginclose').addEventListener('click', function(){
    document.querySelector('.logincontainer').style.display="none";
})

document.querySelector('.signupclose').addEventListener('click', function(){
    document.querySelector('.signupcontainer').style.display="none";
})


