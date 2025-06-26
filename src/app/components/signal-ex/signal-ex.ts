import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signal-ex",
  imports: [],
  templateUrl: "./signal-ex.html",
  styleUrl: "./signal-ex.css",
})

export class SignalEx {
  firstName: string = "chetan";

  productName = "Moto";

  courseName = signal<string>("Angular");

  courseDuration = signal("15 Videos");

  constructor() {
    this.firstName = "Rahul";
    console.log(this.firstName);
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set("React");
    }, 5000);
    console.log(this.courseName());
  }
}
