import { environment } from "../../environments/environment";

export class URLs {
  static GET_AUTH_LOGIN: string = environment.production ? "" : "http://localhost:8000/v1/auth/login";
}
