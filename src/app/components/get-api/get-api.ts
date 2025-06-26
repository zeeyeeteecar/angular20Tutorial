import { Component, inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-get-api",
  imports: [CommonModule],
  templateUrl: "./get-api.html",
  styleUrl: "./get-api.css",
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];

  console = console;

  ngOnInit(): void {
    try {
      this.getUsers();
    } catch (err) {
      throw new Error("Method not implemented.");
    }
  }

  getUsers() {
    //debugger;
    this.http
      .get("http://www.accessrichmond.org/o2b2/api/donor/donorInfo.aspx")
      .subscribe((result: any) => {
        //  debugger;
        this.userList = result;
      });
  }

  get prettyJson(): string {
    return JSON.stringify(this.userList, null, 2); // formatted with indentation
  }
}
