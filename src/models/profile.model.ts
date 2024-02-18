class ProfileDto {
  firstname: string;
  lastname: string;
  email: string;

  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

}

export default ProfileDto;
