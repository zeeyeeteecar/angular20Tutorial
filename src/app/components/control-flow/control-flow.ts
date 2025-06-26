import { Component } from "@angular/core";

@Component({
  selector: "app-control-flow",
  imports: [],
  templateUrl: "./control-flow.html",
  styleUrl: "./control-flow.css",
})
export class ControlFlow {
  isParaVisiable: boolean = false;

  showHide() {
    if (this.isParaVisiable == true) {
      this.isParaVisiable = false;
    } else {
      this.isParaVisiable = true;
    }
  }
}
