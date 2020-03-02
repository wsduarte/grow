const puppeteer = require("puppeteer")

/**
 * Css selectors of relevant elements fromm Google Images
 */
const GOOGLE_INPUT_SELECTOR = "#sbtc > div > div.a4bIc > input"
const GOOGLE_BUTTON_SELECTOR = "#sbtc > button"
const IMAGE_CONTAINER = "#islrg > div.islrc"

/**
 * Enters the input into the Google's search bar, cliks the 
 * search button, and etreives the src attribute from the first img selector
 * from the image container of the page.
 * @param {Page} page 
 * @param {string} input 
 */
const getImage = async (page, input) => {
    await page.click(GOOGLE_INPUT_SELECTOR)
    await page.keyboard.type(input)

    await page.click(GOOGLE_BUTTON_SELECTOR)
    await page.waitForNavigation()

    return await (await page.$(IMAGE_CONTAINER)).$eval(
        "img",
        i => i.src
    )
}

/**
 * Launches the browser, goes to Google images url, 
 * returning the corresponding page
 */
const connect = async (browser) => {
    //const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.google.com.co/imghp?hl=en&tab=wi&ogbl")
    return page
}

/**
 * Launches a web browser
 */
const launchBrowser = async () => await puppeteer.launch(
    {   
        
        waitUntil:"networkidle0",
        timeout:0
    }
)

/**
 * Given a size and an array, buffers (arrays) with the given
 * elements and size, and stores those buffers into another 
 * array
 * @param {Number} size 
 * @param {Array} arr 
 */
const bufferArray = (size) => (arr) => {
    let currentBuffer = []
    let buffered = []
    for(const item of arr){
        currentBuffer.push(item)
        if(currentBuffer.length == size){
            buffered.push(currentBuffer)
            currentBuffer = []
        }
    }

    if(currentBuffer.length > 0){
        buffered.push(currentBuffer)
    }
    return buffered
}

/**
 * Retreives the source of an image given the input query
 * and the browser
 * @param {Browser} browser
 * @param {string} input 
 */
const collectImage = (browser) => async (input) => {
    const page = await connect(browser)
    const img_src = await getImage(page, input)
    await page.close()
    return img_src
}

/**
 * Given a window, returns an array of collectImage promises
 * of the same size
 * @param {Browser} browser 
 * @param {Array} window 
 */
const collectImages = (browser, window) => 
    Promise.all(window.map(collectImage(browser)))

/**
 * Given an array of queries, retrieves and returns 
 * an array with the sources of the images
 * @param {Browser} browser 
 * @param {Array} queries
 */
const searchImages = (browser) => async (queries) => {
    const windows = bufferArray(5)(queries)
    let images = []
    for(const window of windows){
        const windowImages = await collectImages(browser, window)
        images = images.concat(windowImages)
    }
    return images
}


const imageCrawlerService = launchBrowser().then(
    browser => {
        return {
            searchImages: searchImages(browser)
        }
    }
)

// imageCrawlerService.then(
//     utils => utils.searchImages(["tree", "apple"])
// ).then(
//     res => console.log(res)
// )

module.exports = imageCrawlerService