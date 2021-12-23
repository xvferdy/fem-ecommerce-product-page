# E-commerce product page

> 🔖 This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## 🌈 ✨ 🎉 Have Fun Building! 🚀 🎊 🎈
> 🖥️ **Welcome** <br>
> Thanks for checking out this front-end coding challenge.
[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.
***To do this challenge, you need a good understanding of HTML, CSS and JavaScript.*** Press <kbd>Enter</kbd> 🚀 to start the game!!

## 🥷 Table of Contents
- [Brief](#brief)
- [The challenge](#the-challenge)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned-)
- [Difficult Things](#difficult-things-)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Brief
In this challenge, you'll build a beautiful product page. We'll be putting your JS skills to the test with a lightbox product gallery and cart functionality!

Your challenge is to build out this **e-commerce product page** and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go 👍.

**Preview** 👓

![Design preview for the Loopstudios landing page coding challenge](./src/assets/design/desktop-preview.jpg)

## The challenge 
Users should be able to:
  
| Challenge | Newbie | Junior | Intermediate | Advanced |
| --- | :---: | :---: | :---: | :---: |
| View the optimal layout for the site depending on their device's screen size |  | ⭕ |  |  |
| See hover states for all interactive elements on the page | ⭕ |  |  |  |
| Open a lightbox gallery by clicking on the large product image |  | ⭕ |  |  |
| Switch the large product image by clicking on the small thumbnail images |  |  | ⭕ |  |
| Add items to the cart |  |  | ⭕ |  |
| View the cart and remove items from it |  |  | ⭕ |  |

[![🐬 Intermediate Difficulty List](https://img.shields.io/badge/Difficulty-Intermediate-3F54A3?style=for-the-badge&logo=frontendmentor "Intermediate Difficulty")](https://www.frontendmentor.io/challenges?difficulties=3)

## Links
- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/ecommerce-product-page-react-sass-XuZN5FC0j)
- Live Site URL: [Netlify](https://ecommerce-product-page-xvferdy.netlify.app/)

## My process
> ⌛ I challenge my self to finish this for ***~5 days*** <br>
> ▐ <br>
> 🧑‍💻 ***Day 1.*** Studying the design <kbd>~4 hours</kbd> <br>
> ▐ <sub>[Sass](https://sass-lang.com/) boilerplate</sub> <br>
> ▐ <sub>Import Frontend Mentor style guide</sub> <br>
> ▐ <sub>[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) content and tags placement</sub> <br>
> ▐ <br>
> 🧑‍💻 ***Day 2.*** Web layouting <br>
> ▐ <sub>Navbar <kbd>~2.5 hours</kbd></sub> <br>
> ▐ <sub>Main content (product images and information) <kbd>~2.5 hours</kbd></sub> <br>
> ▐ <sub>Responsive design <kbd>~4 hours</kbd></sub> <br>
> ▐ <sub>Sidebar & Cart pop-out <kbd>~3 hours</kbd></sub> <br>
> ▐ <sub>Lightbox design <kbd>~2.5 hours</kbd></sub> <br>
> ▐ <br>
> 😭 ***Day 3.*** Working with [React](https://reactjs.org/)<br>
> ▐ <sub>Continuing Lightbox design <kbd>~2 hours</kbd></sub> <br>
> ▐ <sub>Lightbox & showcase images state <kbd>~1.5 hours</kbd></sub> <br>
> ▐ <sub>Cart state <kbd>~7.5 hours</kbd></sub> <br>
> ▐ <sub>Styling Cart's badge & Cart's backdrop <kbd>~3 hours</kbd></sub> <br>
> ▐ <sub>Make hooks for Lightbox and image showcase <kbd>~1.5 hours</kbd></sub> <br>
> ▐ <br>
> ⛱️ ***Day 4.*** Not doing any coding<br>
> ▐ <br>
> 🌐 ***Day 5.*** Add little animation and submit solution to [**Frontend Mentor**](https://www.frontendmentor.io/solutions/ecommerce-product-page-react-sass-XuZN5FC0j "Solution") 🚩 <br>
> ▐ <sub>Sidebar <kbd>~0.5 hours</kbd></sub> <br>
> ▐ <sub>Lightbox & image showcase <kbd>~3 hours</kbd></sub> <br>
> ▐ <sub>Cart <kbd>~1.5 day</kbd></sub> <br>
> ▐ <sub>Try deploy and submit the solution</sub> <br>
> ▐ <br>
> 🗓️ ***Day 6 and forward.*** Continuing incomplete things <br>
> ▐ <sub>Work with ngrok later</sub> <br>
> ▐ <br>
> 🗓️ 

## Built with
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML "developer.mozilla")
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html "W3C")
- [React](https://reactjs.org/ "React js")
- ❤️

## What I learned 🥳

<details>
    <summary>☑️ <b>Prevent for showing leading zero after typing some number inside input</b></summary>
  
The `value={input.toString()` prevent us for showing leading zero after typing some number
###### src/pages/Home.js
```javascript
<input type="number" value={input.toString()} onChange={change} />
```
</details>

<details>
    <summary>☑️ <b>Hide input slider</b></summary>
  
Hide HTML `<input/>` slider
###### src/stylesheets/pages/\_home.scss
```scss
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
```
</details>


## Difficult Things 😓
Things were difficult for me and I finally gave up 😓😓
- [ ] **HTML5** Semantic
- [ ] Not know how to put icon
- [ ] Don't know how to use `<svg/>`
- [ ] Using some css library for image slider
- [ ] Buggy `z-index` for button 
- [ ] Write a clean **CSS** code
- [ ] Reset `input` after clicking 'Add to cart'

## Author
| [<img src="https://avatars.githubusercontent.com/u/47988956?v=4" alt="xvferdy" width="100px"/><br><sub><samp>Berlianto</samp></sub>](https://github.com/xvferdy)  |
|:---:|

## Acknowledgments
- [Material-UI](https://mui.com/ "mui") - For cart badge and icon

<h3 align="right">
      <a href="#readme">To Top ⤴️</a>
</h3>
