let toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click',chooseTheme);

 window.addEventListener('load', checkPrefrence);  //check OS to see what ir prefers
 function checkPrefrence(){
     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
         document.documentElement.classList.add('dark')
         toggleButton.checked = true;
       } else {
        document.documentElement.classList.remove('dark')
       }
 }


function chooseTheme(){   //to choose dark theme it manualy
if(toggleButton.checked){
    document.documentElement.classList.add('dark')
}if(!toggleButton.checked){
    document.documentElement.classList.remove('dark')
}
}