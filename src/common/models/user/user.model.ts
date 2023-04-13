export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password?: string;
  slug: string;
  deleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(user: any = {}) {
    this.id = user.id || 0;
    this.email = user.email || '';
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.username = user.username || '';
    this.password = user.password || undefined;
    this.slug = user.slug || '';
    this.deleted = user.deleted || undefined;
    this.createdAt = user.createdAt ? new Date(user.createdAt) : undefined;
    this.updatedAt = user.updatedAt ? new Date(user.updatedAt) : undefined;
  }
}
