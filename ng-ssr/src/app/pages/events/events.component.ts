import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  description: string;
  keywords: string[];
};

@Component({
  standalone: true,
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [CommonModule],
})
export class EventsComponent implements OnInit {
  post?: Post;
  isLoading = false;
  constructor(
    private http: HttpClient,
    private titleService: Title,
    private meta: Meta
  ) {}
  ngOnInit() {
    this.isLoading = true;
    const postUrl = 'http://localhost:3000/posts/1';
    // const postUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    this.http.get<Post>(postUrl).subscribe({
      next: (post) => {
        this.post = post;
        console.log(post);

        this.titleService.setTitle('Event Post');
        this.meta.addTag({
          name: 'description',
          content: post.description,
        });
        this.meta.addTag({
          name: 'keywords',
          content: post.keywords.join(', '),
        });
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
        this.isLoading = false;
      },
    });
  }
}
