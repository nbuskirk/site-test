/* index.jsx webpack entry point */
import Website from './components/website.jsx'
const bs_styles = require("../../../node_modules/bootstrap/dist/css/bootstrap.css")
const styles = require("./style.css");
/* ^ Build all of this into bundle.js */

var button = document.querySelector('a.btn-sm')
button.onclick = () => {
    var elements = document.body.children;
    var html = 'HTML<BR/>HEAD<BR/>BODY<BR/>';
    for(var i of elements){
      html += i.tagName+'<br/>';
    }
    document.querySelector('p.structure').innerHTML += html.toString();

    const website = new Website();
}
