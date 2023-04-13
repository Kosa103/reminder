export class UserSignUpBody {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  slug?: string;
  password: string;

  constructor(user: any = {}) {
    this.email = user.email || '';
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.username = user.username || '';
    this.slug = user.slug || undefined;
    this.password = user.password || '';
  }
}
