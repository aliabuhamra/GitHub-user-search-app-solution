export class UI {
    constructor() {
        this.profile = document.querySelector('.profile');
    }

    showProfile(user) {
        // += تعيد المحتوى الجديد معا السابق جنبا الى  جنب
        this.profile.innerHTML =
            ` <header class="profile-head">
        <img
          class="profile__photo"
          src=${user.avatar_url}
          alt="brand"
        />
        <div class="profile__info">
          <h2 class="profile__name">${user?.name ?? user.login}</h2>
          <h3 class="profile__user-name">@${user.login}</h3>
          <h4 class="profile__date">Joined <time>${user.created_at}</time></h4>
        </div>
      </header>
      <section>
        <p class="profile__des">
        ${user?.bio ?? 'This profile has no bio'}
        </p>
        <div class="row profile-boxs">
          <div class="profile-box">
            <h4 class="profile-box__heading">Repos</h4>
            <p class="profile-box__sub">${user.public_repos}</p>
          </div>

          <div class="profile-box">
            <h4 class="profile-box__heading">Followers</h4>
            <p class="profile-box__sub">${user.followers}</p>
          </div>

          <div class="profile-box">
            <h4 class="profile-box__heading">Following</h4>
            <p class="profile-box__sub">${user.following}</p>
          </div>
        </div>
      </section>

      <footer>
        <ul class="profile-links">
          <li class="profile-links__item">
            <svg class="profile__icon">
              <use xlink:href="assets/sprite.svg#icon-location-pin"></use>
            </svg>
            <a class="profile-links__link" href=${user.location}>${user.location}</a>
          </li>

          <li class="profile-links__item">
            <svg class="profile__icon">
              <use xlink:href="assets/sprite.svg#icon-link"></use>
            </svg>
            <a class="profile-links__link" href="${user.blog}">
                ${user.blog}
            </a>
          </li>

          <li class="profile-links__item">
            <svg class="profile__icon">
              <use xlink:href="assets/sprite.svg#icon-twitter"></use>
            </svg>
            <a class="profile-links__link" href="https://twitter.com/${user.twitter_username}">${user.twitter_username}</a>
          </li>

          <li class="profile-links__item">
            <svg class="profile__icon">
              <use xlink:href="assets/sprite.svg#icon-office"></use>
            </svg>
            <a class="profile-links__link" href="${user.company}">${user.company}</a>
          </li>
        </ul>
      </footer>`
        const links = document.querySelectorAll('.profile-links__link')
        links.forEach(link => {
            if (link.textContent == "null") {
                link.classList.add('inactive')
                link.textContent = "Not Available"
            }
        })

    }

    clearProfile() {
        this.profile.innerHTML = ""
    }

    showRepos() {

    }

    showMessage(className) {
        const message = document.querySelector('.search-bar__message')
        message.style.display = className

        setTimeout(() => {
            this.clearMessage()
        }, 3000)
    }

    clearMessage() {
        const message = document.querySelector('.search-bar__message')
        message.style.display = 'none'
    }
}