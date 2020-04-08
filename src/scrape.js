const cheerio = require("cheerio");
const axios = require("axios");

const URL = "https://foutucode.fr/?random=1";

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    const htmlString = await axios.get(URL);
    const $ = cheerio.load(htmlString.data);
    const figureElement = $("figure");
    const elementAttributes = figureElement.find("img")["0"].attribs;
    resolve({
      url: elementAttributes["data-src"],
      alt_sizes: elementAttributes["data-srcset"].split(", ").map(value => {
        let arr = value.split(" ");
        let src = arr.shift(),
            size = arr.shift();
        let returnObject = {};
        returnObject[`${size}`] = src;
        return returnObject;
      }),
      altText: elementAttributes.alt
    })
  })
};
