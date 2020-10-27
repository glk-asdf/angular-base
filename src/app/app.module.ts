// 浏览器模块
import { BrowserModule } from '@angular/platform-browser';
// angular 模块
import { NgModule } from '@angular/core';

// App 组件
import { AppComponent } from './app.component';

@NgModule({
  // 声明，组件需要在此声明
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // 提供者
  providers: [],
  // 启动时打开的组件
  bootstrap: [AppComponent]
})
export class AppModule { }
