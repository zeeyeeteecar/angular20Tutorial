import { Component, signal, computed  } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-data-binding",
  imports: [FormsModule ],
  templateUrl: "./data-binding.html",
  styleUrl: "./data-binding.css",
})
export class DataBinding {

  courseName = "Angular 20 Tutorial";

  showWelcomeMessage() {}
  changeCourseName() {}
  oncitychange() {}
}
