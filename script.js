// login page fucntionality

const loginForm = document.getElementById("login-form");

if(loginForm){
	loginForm.addEventListener('submit', (e) =>{
		e.preventDefault();
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		//In real app, this would be backent authentication
		console.log('Login attempt:', email, password);
		alert('Login Functionality would be implemented with a backend.');
		loginForm.reset();
	});
}