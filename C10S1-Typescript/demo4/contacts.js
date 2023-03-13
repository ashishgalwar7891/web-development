// const contacts: any =[];
var Contact = /** @class */ (function () {
    function Contact(username, email, message) {
        this._username = username;
        this._email = email;
        this._message = message;
    }
    Object.defineProperty(Contact.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
var submitContact = function (formData) {
    //@ts-ignore
    var form = Object.fromEntries(new FormData(formData));
    var contact = new Contact(form.username, form.email, form.message);
    sendcontact(contact);
};
function sendcontact(contact) {
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    };
    fetch('http://localhost:3000/contacts', requestOptions)
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); });
    alert("Your data is loaded");
}
