import puppeteer from "puppeteer";
import fs from 'fs'
const scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let currentPage = 1;
    const maxPages = 5;
    let allBooks = [];
    while (currentPage <= maxPages) {
        const url = `https://books.toscrape.com/catalogue/category/books_1/page-${currentPage}.html`;
        await page.goto(url);
        const books = await page.evaluate(() => {

            const bookelements = document.querySelectorAll('.product_pod')
            return Array.from(bookelements).map((book) => {
                const title = book.querySelector('h3 a').getAttribute('title');
                const price = book.querySelector('.price_color').textContent;
                const stock = book.querySelector('.instock.avalability') ? 'In Stock' : ' Out of Stock';
                const rating = book.querySelector('.star-rating').className.split(' ')[1];
                const link = book.querySelector(' h3 a').getAttribute('href');
                return { title, price, stock, rating, link }
            })
        })
        currentPage++;
        console.log(currentPage,url)
        allBooks.push(...books);
    }

    fs.writeFileSync('books.json', JSON.stringify(allBooks, null, 2))
    console.log('sa',allBooks)

    await browser.close();
}


scrape()