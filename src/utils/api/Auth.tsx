import {UserI} from '../interfaces/User';

export default class Auth {
  private url: string = 'http://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json';

  public async login(username: string, password: string): Promise<{status: boolean; data: UserI}> {
    const body: UserI = {
      email: username,
      password,
    };
    try {
      const response = await fetch(this.url);
      const data = await response.json();

      if (data?.response) {
        const pass = this.verifyCredentials(data.response.users, body);
        if (pass.id) {
          return {status: true, data: pass};
        } else {
          return {status: false, data: {name: 'Wrong credentials'}};
        }
      } else {
        return {status: false, data: {name: 'Network error'}};
      }
    } catch (e) {
      return {status: false, data: {name: 'Network error'}};
    }
  }

  private verifyCredentials(userData: Array<UserI>, credentials: UserI): UserI {
    const match = userData.filter(el => {
      const email = el.email === credentials.email;
      const password = el.password === credentials.password;
      return email && password;
    });
    if (Boolean(match.length)) {
      match[0].password = '';
      return match[0];
    } else {
      return {};
    }
  }

  public async LogOut() {
    localStorage.removeItem('user');
    window.location.reload();
  }
}
