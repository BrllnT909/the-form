

  var firebaseConfig = {
    apiKey: "AIzaSyBUtMckz6ooFq9PKIGaVYbewEYY03vXkLs",
    authDomain: "the-form-98ed8.firebaseapp.com",
    projectId: "the-form-98ed8",
    storageBucket: "the-form-98ed8.appspot.com",
    messagingSenderId: "40412406527",
    appId: "1:40412406527:web:8ddc1ab5580259611222ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//upload profile picture
const img = document.querySelector('#userphoto');
const file = document.querySelector('#fileupload');


//file.addEventListener('change', function(){
//    const choosedFile = this.files[0];
//    if (choosedFile) {
//        const reader = new FileReader(); 
//        reader.addEventListener('load', function(){
//            img.setAttribute('src', reader.result);
//        });
//        reader.readAsDataURL(choosedFile);
//    }
//});


//pop up
const popUp = document.querySelector(".pop-up-text");
const backDrop = document.querySelector(".back-drop");
const okBtn = document.querySelector(".ok-btn");
const signUp = document.querySelector(".submitbtn");

signUp.addEventListener("click",()=>{
    popUp.classList.add("activePopUp");
    backDrop.classList.add("active");
})
// okBtn.addEventListener("click",()=>{
//     popUp.classList.remove("activePopUp");
//     backDrop.classList.remove("active");
// })


//user data
var userName,userEmail,userPhoneNumber,userPassword;
const userData = () =>{
     userName = document.querySelector(".user-name").value;
     userEmail =document.querySelector(".user-email").value;
     userPhoneNumber = document.querySelector(".user-number").value;
//     userPassword = document.querySelector(".user-password").value;
}

okBtn.addEventListener("click",()=>{
    popUp.classList.remove("activePopUp");
    backDrop.classList.remove("active");
    userData();
    firebase.database().ref('userData/'+userName).set({
        UserName:userName,
        UserEmail:userEmail,
        UserPhoneNumber:userPhoneNumber,
//        UserPassword:userPassword
    })

})