import { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

let captcha_value = '';
let captcha_number = '';
let reloadText = "{{reloadText}}";
let LoadCanvasTemplate_HTML = `<div><canvas id="canv"></canvas><div><a id="reload_href"  style="cursor: pointer; color: blue">${reloadText}</a></div></div>`;
let LoadCanvasTemplateNoReload_HTML = "<div><canvas id=\"canv\"></canvas><div><a id=\"reload_href\"  style=\"cursor: pointer; color: blue\"></a></div></div>";;


export const loadCaptchaEnginge = (numberOfCharacters) => {

    captcha_number = numberOfCharacters;
    let length = parseInt(numberOfCharacters),


        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    let captcha = retVal;

    captcha_value = captcha;



    let length_height_canvas = Math.round(parseInt(length) / 3);

    let canvas = document.getElementById('canv'),
        ctx = canvas.getContext('2d'),
        img = document.getElementById('image');
    let text = captcha;
    let x = 12.5;
    let y = 15;
    let lineheight = 30;
    let canvas_height = (parseInt(length) - parseInt(length_height_canvas)) * 20;
    let lines = text.split('\n');
    let lineLengthOrder = lines.slice(0).sort(function (a, b) {
        return b.length - a.length;
    });
    ctx.canvas.width = parseInt(length) * 25;
    ctx.canvas.height = (lines.length * lineheight);


    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.textBaseline = "middle";
    ctx.font = "italic 20px Arial";
    ctx.fillStyle = "#ffffff";

    let num = 0;
    for (let i = 0; i < parseInt(length); i++) {
        num = parseInt(num) + 1;
        let heigt_num = 20 * num;
        ctx.fillText(retVal[i], heigt_num, Math.round(Math.random() * (15 - 12) + 12));
    }

    document.getElementById("reload_href").onclick = function () {
        loadCaptchaEnginge(captcha_number)
    }
};

export const validateCaptcha = (userValue, reload = true) => {
    if (userValue != captcha_value) {
        if (reload == true) {
            loadCaptchaEnginge(captcha_number);
        }

        return false;
    }

    else {
        return true;
    }
};

export class LoadCanvasTemplate extends Component {

    render() {
        let text = this.props.reloadText ? this.props.reloadText : "Reload Captcha";
        return (ReactHtmlParser(LoadCanvasTemplate_HTML.replace(reloadText, text)));
    }

};

export class LoadCanvasTemplateNoReload extends Component {

    render() {
        return (ReactHtmlParser(LoadCanvasTemplateNoReload_HTML));
    }

};
