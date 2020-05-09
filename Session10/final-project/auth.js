// get data
// db.collection('guides').get().then(snapshot => {
//   setupGuides(snapshot.docs);
// })
db.collection('user').orderBy("time","desc").onSnapshot(snapshot=>{ //desc =>> stt giảm dần 
    let changes=snapshot.docChanges() // detect change intime , la 1 array 
    changes.forEach(change => {
        if(change.type=='added'){
            render(change.doc)
        // }else if(change.type='updated'){
        //     let olddiv=list.querySelector('[data-id=' + change.doc.id + ']')
        //     list.removeChild(olddiv)
        }
    });
    
  })
  
  // nav-bar process
  // get element
  var btnLogin = document.getElementById('log-in');
  var btnLogout = document.getElementById('logout');
  var btnSignup = document.getElementById('sign-up');
  var txtEmail = document.getElementById('txt-email');
  var txtPassword = document.getElementById('txt-password');
  
  // listen for auth status changes
  auth.onAuthStateChanged(user => {
    if(user) {
      console.log('user logged in, ',user);
    } else {
      console.log('user logged out');
    }
  });
  //auth
  // sign up
  btnSignup.addEventListener('click', (e) => {
    e.preventDefault();
  
    // get email and password
    var email = txtEmail.value;
    var pass = txtPassword.value;
    const auth = firebase.auth();
    //sign up
    auth.createUserWithEmailAndPassword(email, pass)
      .then()
      .catch(e => console.log(e.message));
  });
  
  
  // log out
  const logout = document.getElementById('logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
  });
  
  // login 
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    // get email and password
    var email = txtEmail.value;
    var pass = txtPassword.value;
    const auth = firebase.auth();
  
    // login
    auth.signInWithEmailAndPassword(email, pass)
      .catch(e => console.log(e.message));
  });
  
  
  // firebase.auth().signOut().then(function() {
  //   // Sign-out successful.
  // }).catch(function(error) {
  //   // An error happened.
  // });
  
  
  
  // realtime listeners
  // // const auth = firebase.auth();
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     console.log(user);
  //   } else {
  //     // User is signed out.
  //     // ...
  //     console.log('not log in yet');
      
  //   }
  // });