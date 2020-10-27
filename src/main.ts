// 核心，启用生产模式方法
import { enableProdMode } from '@angular/core';
// 平台浏览器动态
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// app 模块
import { AppModule } from './app/app.module';
// 开发模式
import { environment } from './environments/environment';

// 如果是生产者模式
if (environment.production) {
  // 启用生产模式
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
