import {
  LowerCasePipe,
  NgClass,
  NgStyle,
  UpperCasePipe,
} from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-att-directive",
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe],
  templateUrl: "./att-directive.html",
  styleUrl: "./att-directive.css",
})
export class AttDirective {
  div1ClassName = signal<string>("");
  isDiv2Green: boolean = false;
  firstName: string = "Chetan";

  constructor() {
    console.log("constructor");
    this.firstName = this.firstName.toUpperCase();
  }

  ngonInit(): void {
    console.log("ngonInit"); //to trigger api calls
  }

  //to subscribe
  ngAfterContentchecked(): void {
    console.log("ngAfterContentchecked");
  }

  ngAftercontentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  //to deal with viewchild
  //subscribe
  ngAfterViewChecked(): void {
    console.log("ngAfterViewchecked");
  }
  ngonDestroy(): void {
    console.log("ngOnDestroy");
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
    console.log(this.isDiv2Green == true ? "blue" : "red");
    console.log(this.isDiv2Green);
  }
}
