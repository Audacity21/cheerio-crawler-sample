const axios = require('axios');
const cheerio = require('cheerio');

const scrapeWebsite = async () => {
  try {
    // Fetch the HTML content of the website
    const { data } = await axios.get('https://www.codechef.com/users/el_2000031281'); // Replace with the target website URL
    const $ = cheerio.load(data);

    // Jquery selector to get the data
    console.log($(".rating-data-section.problems-solved .content:not(:last)").text());
  } catch (error) {
    console.error('An error occurred while scraping the data:', error);
  }
};

scrapeWebsite();
