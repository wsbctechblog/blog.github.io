import { Component } from '@angular/core';
import { INavMenuItem } from '@wsbc/ux-lib';
import { get_all_blog_posts } from './utils/blog-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsbc-blog';

  exitUrl = 'https://worksafebc.com';

  menuItems: INavMenuItem[] = [
    { caption: 'Home', route: [ '/', ],  },
    { caption: 'Posts', route: [ '/', 'posts'] },
    { caption: 'About', route: [ '/', 'about'] },
  ];

  blogPosts = get_all_blog_posts();
}
