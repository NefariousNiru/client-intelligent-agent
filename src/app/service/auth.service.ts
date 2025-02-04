import { Injectable } from "@angular/core";
import { URLs } from "../configs/urls";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  loginWithMicrosoft() {
    this.http.get<{ login_url: string }>(URLs.GET_AUTH_LOGIN).subscribe({
      next: (response) => {
        if (response?.login_url) {
          window.location.href = response.login_url; // Redirect to Microsoft OAuth
        }
      },
      error: (error) => {
        console.error("Error fetching login URL:", error);
      },
      complete: () => {
        console.log("Login URL fetch completed.");
      }
    });

  }
}
