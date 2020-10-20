import { Component, OnInit } from '@angular/core';
import { get_all_blog_posts } from '../utils/blog-post';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {


  blogPosts = get_all_blog_posts();

  constructor() { }

  ngOnInit(): void {
  }

}
