# French Developer Memes

This modules does nothing but returning a random dev meme, written in French.  
All the memes are from the [FoutuCode](https://foutucode.fr) website.  
Special thank to the owner [@foutucode](https://www.instagram.com/foutucode) for letting me scrape his website

## Installation

Install this module by running the following NPM command in your terminal:
```
npm install french-dev-memes
```

## Usage & Data Structure

Using this module is very simple using [ES6 Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).  
Here is an example of how to user this module.
```js
const getAMeme = require("french-dev-memes");

getAMeme()
  .then(console.log)
  .catch(console.error)
```

The data output will look like the following:
```json
{
  "url": "https://foutucode.fr/wp-content/uploads/2020/01/72204405_2554244637992973_4604232665325895680_n_2554244634659640.jpg",
  "altSizes": [
    {
      "960w": "https://foutucode.fr/wp-content/uploads/2020/01/72204405_2554244637992973_4604232665325895680_n_2554244634659640.jpg"
    },
    {
      "300w": "https://foutucode.fr/wp-content/uploads/2020/01/72204405_2554244637992973_4604232665325895680_n_2554244634659640-300x150.jpg"
    },
    {
      "768w": "https://foutucode.fr/wp-content/uploads/2020/01/72204405_2554244637992973_4604232665325895680_n_2554244634659640-768x384.jpg"
    }
  ],
  "altText": "Quand le dev backend fait du frontend"
}


```