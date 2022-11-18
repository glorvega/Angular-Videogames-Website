import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="footer">
	<div class="personal-card">
		<div class="personal-image">
			<img src="https://avatars.githubusercontent.com/u/104761310?v=4" />
		</div>
		<div class="personal-info">
			<div class="name">Gloria Vega</div>
			<div class="spacer"></div>
			<div class="title">FS - Developer</div>
		</div>
		<div class="social-info">
			<div class="social-icons">
				<div class="github">
                    <a href="https://github.com/glorvega"><img src="https://wac-cdn.atlassian.com/dam/jcr:4925019e-7cd0-44ba-b902-30a4666a1a14/github-grey.png?cdnVersion=396g" /></a>
                </div>
			</div>
			<div class="social-details">
				<div class="details"></div>
			</div>
		</div>
	</div>
</div>
  `,
  styles: [`
  .footer {
    box-sizing: content-box;
    position: fixed;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #dedede;
    bottom: 0;
    height: 100px;
    width: 100%;
    padding-top: 5px;
    background-color: #303030;
  }
  
  .personal-card {
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 0 auto;
  }
  
  .personal-image {
    margin: auto;
    text-align: center;
    height: 50px;
    padding-right: 10px;

    & img {
      margin: auto;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #b8bab9;
    }
  }

  .personal-info {
    text-align: center;
    margin-left: 10px;
    padding-top: 10px;

    .title {
      font-size: 12px;
    }

    .name {
      font-size: 14px;
      font-weight: bold;
    }

  }
  
  .social-icons {
    text-align: center;
    margin-top: 20px;
    margin-left: 15px;

    .github {
      width: 50px;
      height: 50px;
      
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  
  .icon {
    border: 2px solid #7d7d7f;
    font-size: 8pt;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    text-align: center;
    cursor: pointer;
  }
  
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
