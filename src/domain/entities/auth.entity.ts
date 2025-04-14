export class AuthEntity {
  public readonly username: string;
  public readonly email: string;
  public readonly accessToken: string;

  constructor(username: string, email: string, accessToken: string) {
    this.username = username;
    this.email = email;
    this.accessToken = accessToken;
  }

  get isAuthorized(): boolean {
    return !!this.accessToken;
  }
}
