// const contacts: any =[];
class Contact{
    private _username: string;
    public get username(): string {
        return this._username;
    }
     set username(value: string) {
        this._username = value;
    }


    private _email: string;
    public get email(): string {
        return this._email;
    }
     set email(value: string) {
        this._email = value;
    }
    private _message: string;
    public get message(): string {
        return this._message;
    }
     set message(value: string) {
        this._message = value;
    }
constructor(username:string,email:string,message:string)
{
    this._username=username;
    this._email=email;
    this._message=message;
}

}


const submitContact = (formData)=>
{
//@ts-ignore
    let form=Object.fromEntries(new FormData(formData));
    const contact:Contact=new Contact(<string>form.username,<string>form.email,<string>form.message);
    sendcontact(contact);
}

function sendcontact(contact:Contact)
{
    const requestOptions={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(contact)
    };

fetch('http://localhost:3000/contacts',requestOptions)
.then(response=>response.json())
.then(data=>console.log(data));

alert("Your data is loaded")
}