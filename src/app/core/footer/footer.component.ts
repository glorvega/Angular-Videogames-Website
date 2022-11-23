import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="footer">
      <div class="personal-card">
        <div class="personal-card__image">
          <img src="https://avatars.githubusercontent.com/u/104761310?v=4" />
        </div>
        <div class="personal-card__info">
          <div class="personal-card__info--name">Gloria Vega</div>
          <div class="personal-card__info--spacer"></div>
          <div class="personal-card__info--title">FS - Developer</div>
        </div>
        <div class="personal-card__social-info">
          <div class="personal-card__social-info--social-icons">
            <div class="github">
              <a href="https://github.com/glorvega"
                ><img
                  src="https://wac-cdn.atlassian.com/dam/jcr:4925019e-7cd0-44ba-b902-30a4666a1a14/github-grey.png?cdnVersion=396g"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .footer {
        box-sizing: content-box;
        position: fixed;
        display: flex;
        flex-direction: row;
        border-top: 1px solid #dedede;
        bottom: 0;
        height: 70px;
        width: 100%;
        padding-top: 5px;
        background-color: #303030;

        .personal-card {
          display: flex;
          justify-content: space-between;
          width: 200px;
          margin: 0 auto;

          &__image {
            margin: auto;
            text-align: center;
            height: 50px;
            padding-right: 10px;

            img {
              margin: auto;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 2px solid #b8bab9;
            }
          }

          &__info {
            text-align: center;
            margin-left: 10px;
            padding-top: 10px;

            &--title {
              font-size: 12px;
            }

            &--name {
              font-size: 14px;
              font-weight: bold;
            }
          }

          &__social-info {
            &--social-icons {
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
          }
        }
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
