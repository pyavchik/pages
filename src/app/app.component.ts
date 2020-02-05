import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Nice photo',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1548984363-d6e54c098bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Old fox',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1509618635931-82c44053a9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Moon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1572925077991-61acf7d70608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
