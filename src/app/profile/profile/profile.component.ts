import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";
import { User } from "../../shared/models/user.model";
import { TokenService } from "../../shared/services/token.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: Observable<any>;
  constructor(public tokenService: TokenService) {}

  ngOnInit() {
  this.tokenService.mySubject.
  subscribe(data => {
    this.user = data;
  })
  }
}
