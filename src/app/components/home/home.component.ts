import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { HelpComponent } from "../help/help.component";
import { IdeasComponent } from '../ideas/ideas.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, HeaderComponent, AboutComponent, HelpComponent,IdeasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
