// document.addEventListener('DOMContentLoaded', function () {
//     const modal = document.getElementById('modal');
//     const openLoginModal = document.getElementById('openLoginModal');
//     const openSignupModal = document.getElementById('openSignupModal');
//     const closeModal = document.querySelector('.close');
//     const loginForm = document.getElementById('login-form');
//     const signupForm = document.getElementById('signup-form');
//     const toSignup = document.getElementById('toSignup');
//     const toLogin = document.getElementById('toLogin');

//     openLoginModal.onclick = function () {
//         modal.style.display = "block";
//         loginForm.classList.remove('hidden');
//         signupForm.classList.add('hidden');
//     }

//     openSignupModal.onclick = function () {
//         modal.style.display = "block";
//         signupForm.classList.remove('hidden');
//         loginForm.classList.add('hidden');
//     }

//     closeModal.onclick = function () {
//         modal.style.display = "none";
//     }

//     window.onclick = function (event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     }

//     toSignup.onclick = function (e) {
//         e.preventDefault();
//         loginForm.classList}
//     })

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const userIcon = document.getElementById('userIcon');
    const closeModal = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

    userIcon.onclick = function () {
        modal.style.display = "block";
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    }

    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    toSignup.onclick = function (e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }

    toLogin.onclick = function (e) {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
});