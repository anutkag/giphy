console.log("Let's get this party started!");
let ipkt="NRB4YpQ15sxpyO6cGNt6xAOgmEo3iIOZ"
import { renderGif } from '@giphy/js-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

// create a GiphyFetch with your api key
// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch(ipkt)
let input=document.querySelector("input")
let search=document.querySelector("#search")
let deleteImages=document.querySelector("#remove")
deleteImages.onclick=function(){
    container.innerHTML=""
}
const vanillaJSGif = async (container) => {
    // render a single gif
    let mountNode=document.createElement("div")
    container.append (mountNode)
    const { data } = await gf.search(input.value, {limit:1})
    input.value=""
    renderGif({ gif: data[0], width: 300 }, mountNode)
}
let container=document.querySelector(".container")
search.onclick=function(){
vanillaJSGif (container)
}