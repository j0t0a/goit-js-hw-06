const form=document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData={
        email,
        password,
    }
    if(email===''||password===''){
        alert('All the fields must be filled!')
    } else{
        return(formData);
    }

    event.currentTarget.reset();
}