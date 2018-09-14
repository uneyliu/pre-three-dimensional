import { CesiummapDirective } from './directies/cesiummap.directive';
import { ArkmapDirective } from './directies/arkmap.directive';
import {
  NavigationService
} from './services';
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  CommonModule
} from '@angular/common';
import {
  HeaderComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent,
  LoginComponent,
  ErrorComponent,
  ToolbarComponent,
  SidebarComponent,
  LayoutComponent
} from './components';
import { NgZorroAntdModule } from 'ng-zorro-antd';


const modules = [
  RouterModule,
  CommonModule,
  NgZorroAntdModule
];

const directives = [
  ArkmapDirective,
  CesiummapDirective
];

const components = [
  HeaderComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent,
  ToolbarComponent,
  SidebarComponent,
  LayoutComponent,
  LoginComponent,
  ErrorComponent
];

const services = [
  NavigationService
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...directives,
    ...components
  ],
  exports: [
    ...directives,
    ...components
  ],
  providers: [
    ...services
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    // throwIfAlreadyLoaded(parent, 'CoreModule');
  }
}
