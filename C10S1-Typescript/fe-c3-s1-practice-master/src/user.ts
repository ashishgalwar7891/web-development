//Define User class
const users: any = [];
class User {
//Field declartions
  private username: string;
  private password: string;
  private contact:string;
  private email: string;
  private address: string;

//constuctor 
constructor(username: string,password: string,contact:string,email: string,address: string) {
    this.username = username;
    this.password = password;
    this.contact=contact;
    this.email = email;
    this.address = address;
  }

//getter and setter methods
public getUsername(): string {
    return this.username;
  }
  public setUsername(username: string): void {
    this.username = username;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(password: string): void {
    this.password = password;
  }
    public getContact(): string {
    return this.contact;
    }
    public setContact(contact: string): void {
    this.contact = contact;
    }

  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public getAddress(): string {
    return this.address;
  }
  public setAddress(address: string): void {
    this.address = address;
  }
}

//Fetch form values using Object.fromentries()
const submitUser = (formData: any) => {
    //@ts-ignore
  let form = Object.fromEntries(new FormData(formData));
  const user: User = new User(
    <string>form.username,
    <string>form.password,
    <string>form.contact,
    <string>form.email,
    <string>form.address
  );

  //call registerUser method with the constructed User object
  registerUser(user);
};

//POST data using fetch() api
function registerUser(user: User) {
  //Dispay welcome message after successful registration
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
};
    fetch('http://localhost:3000/users/', requestOptions)
        .then(response => response.json())
        .then(data =>  console.log(data));
            alert("Welcome "+user.getUsername());
            alert("Your contact number is "+user.getContact());
}
