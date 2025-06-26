import { Component, inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms"; // Import FormsModule

@Component({
  selector: "app-user",
  imports: [CommonModule, FormsModule],
  templateUrl: "./user.html",
  styleUrl: "./user.css",
})
export class User {
  http = inject(HttpClient);

  userList: any[] = [];

  userObject: any = {
    userId: 0,
    emailId: "",
    password: "",
    fullName: "",
    mobileNo: "",
  };

  console = console;

  ngOnInit(): void {
    try {
      this.getUsers();
    } catch (err) {
      throw new Error("Method not implemented.");
    }

    this.console;
  }

  getUsers() {
    this.http
      //.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
      .get("https://www.accessrichmond.org/o2b2/api/donor/donorInfo.aspx")
      .subscribe((result: any) => {
        //  debugger;
        this.userList = result;
      });
    // debugger;
  }

  onSaveUser() {
    // debugger;
    this.http
      .post(
        "https://api.freeprojectapi.com/aPi/GoalTracker/register",
        this.userObject
      )
      .subscribe({
        next: (result) => {
          debugger;
          alert("User Created success");
          this.getUsers();
        },
        error: (error) => {
          // debugger;
          console.log(error);
          alert("Errro -" + error.error);
        },
      });
  }

  onEdit(item: any) {
    alert("clicked");
  }
}
