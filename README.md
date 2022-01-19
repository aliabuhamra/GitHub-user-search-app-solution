# GitHub user search app solution

![github repo size](https://img.shields.io/github/repo-size/aliabuhumra/Crowdfunding-Product-Page)
![github contributors](https://img.shields.io/github/contributors/aliabuhumra/Crowdfunding-Product-Page)
![github twiter](https://img.shields.io/twitter/follow/AliAbuhumra?style=social)

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design preview for the Four card feature section coding challenge](./preview.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/crowdfunding-product-page-bMnf7HHXJ)
- Live Site URL: [Live site URL](https://aliabuhumra.github.io/Crowdfunding-Product-Page/)

## My process

### Built with

- Semantic HTML5 markup
- BEM
- CSS Dark Mode && Light Mode
- Dom Level High
- API github

### What I learned

- Writing codes in an organized manner javascript vanila
- Switch The Theme Mode
- I faced quite a few challenges in helper.js file , But I came out with great benefit
  This is part of the code I was facing the challenge with

```
export class Github {
    constructor(baseURL) {
        this.baseURL = baseURL
        this.repos_count = 5
        this.repos_sort = 'created : asc'
    }

    async get(user) {
        const profileResponse = await fetch(this.baseURL + user)
        const reposResponse = await fetch(`${this.baseURL}${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`)
        const profile = await profileResponse.json()
        const repos = await reposResponse.json()
        return {
            profile,
            repos
        }
    }
}

```

## Author

- Website - [Github/AliAbuhumra](https://github.com/aliabuhumra)
- Frontend Mentor - [@AliAbuhumra](https://www.frontendmentor.io/profile/aliabuhumra)
- Twitter - [@AliAbuhumra](https://twitter.com/aliabuhumra)

Thanks for checking out this project.
