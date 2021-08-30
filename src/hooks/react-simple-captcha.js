import { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

let captcha_value = '';
let captcha_number = '';
let backgroundColor_value = '';
let fontColor_value = '';
let charMap_value = '';
let LoadCanvasTemplate_HTML = "<div><canvas id=\"canv\"></canvas><div><a id=\"reload_href\"  style=\"cursor: pointer; color: blue\">Reload Captcha</a></div></div>";
let LoadCanvasTemplateNoReload_HTML = "<div><canvas id=\"canv\"></canvas><div><a id=\"reload_href\"  style=\"cursor: pointer; color: blue\"></a></div></div>";;


export const loadCaptchaEnginge = (numberOfCharacters, backgroundColor = 'white', fontColor = 'black', charMap = '') => {

    backgroundColor_value = backgroundColor;
    fontColor_value = fontColor;
    charMap_value = charMap;
    captcha_number = numberOfCharacters;
    let retVal = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (charMap === "upper") {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (charMap === "lower") {
        charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    }
    else if (charMap === "numbers") {
        charset = "0123456789";
    }
    else if (charMap === "special_char") {
        charset = "~`!@#$%^&*()_+-=[]{}\|:'<>,.?/";
    }

    let length = parseInt(numberOfCharacters);



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

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.textBaseline = "middle";
    ctx.font = "italic 20px Arial";
    ctx.fillStyle = fontColor;




    let num = 0;
    for (let i = 0; i < parseInt(length); i++) {
        num = parseInt(num) + 1;
        let heigt_num = 20 * num;
        ctx.fillText(retVal[i], heigt_num, Math.round(Math.random() * (15 - 12) + 12));
    }

    document.getElementById("reload_href").onclick = function () {
        loadCaptchaEnginge(captcha_number, backgroundColor, fontColor, charMap);
    }

};

export const validateCaptcha = (userValue, reload = true) => {
    if (userValue != captcha_value) {
        if (reload == true) {
            loadCaptchaEnginge(captcha_number, backgroundColor_value, fontColor_value, charMap_value);
        }

        return false;
    }

    else {
        return true;
    }
};

export class LoadCanvasTemplate extends Component {

    render() {
        let reload_text = "";
        let reload_color = "";
        LoadCanvasTemplate_HTML = "<div><canvas id=\"canv\" style=\"background-color: blue;\"></canvas><div><a id=\"reload_href\"  style=\"cursor: pointer; color: blue\">Reload Captcha</a></div></div>";

        if (this.props.reloadText) {
            reload_text = this.props.reloadText;


        }

        if (this.props.reloadColor) {
            reload_color = this.props.reloadColor;
        }

        if (reload_text == "") {
            reload_text = "Reload Captcha";
        }

        if (reload_color == "") {
            reload_color = "blue";
        }

        LoadCanvasTemplate_HTML = "<div><canvas id=\"canv\"></canvas><div><a id=\"reload_href\"  style=\"cursor: pointer; color: " + reload_color + "\">" + reload_text + "</a></div></div>";

        return (ReactHtmlParser(LoadCanvasTemplate_HTML));
    }

};

export class LoadCanvasTemplateNoReload extends Component {

    render() {
        return (ReactHtmlParser(LoadCanvasTemplateNoReload_HTML));
    }

};
