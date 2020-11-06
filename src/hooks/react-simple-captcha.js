import React, { Component } from 'react';

let captcha_value = '';
let captcha_number = '';


export const loadcaptchaenginge = (numberOfCharacters) => {

    captcha_number = numberOfCharacters;
    let length = parseInt(numberOfCharacters),


        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    let captcha = retVal;
    //   document.getElementById('captcha_div').innerHTML = captcha;

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
    ctx.canvas.width = parseInt(length)*25;
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



};

export const loadCanvas = () => {
    return (<div className="col mt-3"><canvas id="canv"></canvas><div><a onClick={() => loadcaptchaenginge(captcha_number)} style={{ cursor: 'pointer', color: 'blue'}}>Reload Captcha</a></div></div>);
};

 

export const loadCanvasNoReload = () => {
    return (<div className="col mt-3"><canvas id="canv"></canvas></div>);
};

export const validateCaptcha = (userValue,reload=true) => {
    if (userValue != captcha_value) {
        if (reload == true) {
            loadcaptchaenginge(captcha_number);
        }
       
        return false;
    }

    else {
        return true;
    }
};


 
 