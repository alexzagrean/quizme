import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer){
      iconRegistry.addSvgIcon(
        'plus', sanitizer.bypassSecurityTrustResourceUrl('assets/images/plus.svg')
      );
      iconRegistry.addSvgIcon(
        'search', sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg')
      );
    }
  
}
