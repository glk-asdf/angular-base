// 核心，组件
import { Component } from '@angular/core';

@Component({
  // 选择器
  selector: 'app-root',
  // 模板路径
  templateUrl: './app.component.html',
  // 样式路径
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}
