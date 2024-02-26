export class Organization {
  login: string;
  description: string;
  avatar_url: string;

  constructor(login: string, description: string, avatar_url: string) {
    this.login = login;
    this.description = description;
    this.avatar_url = avatar_url;
  }

  setLogin(login: string): this {
    this.login = login;
    return this;
  }

  setDescription(description: string): this {
    this.description = description;
    return this;
  }

  setAvatar(avatar: string): this {
    this.avatar_url = avatar;
    return this
  }

  getAvatar(): string {
    return this.avatar_url;
  }

  getLogin(): string {
    return this.login;
  }

  getDescription(): string {
    return this.description;
  }
}
