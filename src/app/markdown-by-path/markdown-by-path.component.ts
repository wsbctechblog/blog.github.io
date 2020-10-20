import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-markdown-by-path',
  templateUrl: './markdown-by-path.component.html',
  styleUrls: ['./markdown-by-path.component.scss']
})
export class MarkdownByPathComponent implements OnInit, OnChanges {

  @Input() remote_path: string;

  @Input() isExcerpt = false;

  @Input() excerptLimit = 400;

  @Input() permLink: string;

  @Input() title: string;

  postContent = '';

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const excerpt = (markdown: string) => {
      if (markdown.match(/<!-- end -->/)) {
        return markdown.split(/<!-- end -->/)[0];
      }
      let excerpted = markdown
        .split(/\n/g)
        .reduce((acc, line) => acc.length > this.excerptLimit ? acc : (acc + '\n' + line), '')
        ;
      if (excerpted.length < markdown.length) {
        excerpted = excerpted + `<br />...[Read More](/post/${this.permLink})`;
      }
      return excerpted;
    };

    if (changes && changes.remote_path && this.remote_path) {
      this.httpClient.get(this.remote_path, {responseType: 'text'})
      .subscribe(content => {
        this.postContent = this.isExcerpt ? excerpt(content) : content;
      });
    }
  }

}
