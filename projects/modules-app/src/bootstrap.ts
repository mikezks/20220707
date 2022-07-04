import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { ModulesContainerModule } from "./app/modules-container/modules-container.module";

/* import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */

if (environment.production) {
  enableProdMode();
}

ModulesContainerModule;
