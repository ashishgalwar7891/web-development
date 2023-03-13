const contacts = [];
class Contact {
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    constructor(username, email, message) {
        this._username = username;
        this._email = email;
        this._message = message;
    }
}
const submitContact = (formData) => {
    //@ts-ignore
    let form = Object.fromEntries(new FormData(formData));
    const contact = new Contact(form.username, form.email, form.message);
    sendcontact(contact);
};
function sendcontact(contact) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    };
    fetch('http://localhost:3000/contacts', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    alert("Your data is loaded");
}
