import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find_blog_post_by_url } from '../utils/blog-post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  remote_path: string;
  permLink: string;
  title: string;

  postContent ;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramsMap => {
      const url = paramsMap.get('id');
      const post = find_blog_post_by_url(url);
      this.remote_path = post.remote_path;
      this.permLink = '/post/' + url;
      this.title = post.title;
    });
  }

}
