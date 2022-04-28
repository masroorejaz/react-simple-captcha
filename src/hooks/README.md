# React Simple Captcha

React Simple Captcha is a very powerful, highly customizable and easy to use captcha for React JS. 

 **Install** 
```sh
$ npm install react-simple-captcha
```

**Demo**   
Demo can be seen [here](https://react-simple-captcha.herokuapp.com/ "React Simple Captcha Demo").
 
 **Usage Guide** 
 
 <p> Just follow these 4 easy steps to use the react simple captcha:</p>
 

   -  **Step 1:**  
  
  Import all functions from react-simple-captcha

  ```sh
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
```

   -  **Step 2:**  
  
Place **< LoadCanvasTemplate />** or **< LoadCanvasTemplateNoReload />** *(if you do not want 'Reload Captcha' functionality)* in your render code

   ```sh
 render() {
        return (<div>
           <LoadCanvasTemplate />
            </div>);
    };
```

 **OR**
 
   ```sh
 render() {
        return (<div>
            <LoadCanvasTemplateNoReload />
            </div>);
    };
```

   -  **Step 3:**  
  
Paste **loadCaptchaEnginge(6)** *(You can change 6 to number of captcha charcters you want)* in **componentDidMount**

   ```sh
 componentDidMount () {
       loadCaptchaEnginge(6); 
    };
```
   -  **Step 4:**  
  
Validate captcha by using **validateCaptcha(user_captcha_value)** 

   
   ```sh
 doSubmit = () => {
<! --   let's assume there is an HTML input text box with id 'user_captcha_input' to get user input -->   
        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value)==true) {
            alert('Captcha Matched');
        }

        else {
            alert('Captcha Does Not Match');
        }
    };
```

**OR**  
If you don't want captcha to be reloaded if user enter the wrong value then set second parameter to *false* **validateCaptcha(user_captcha_value, false)**

 
 ```sh
 doSubmit = () => {
<! --   let's assume there is an HTML input text box with id 'user_captcha_input' to get user input -->    
        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value, false)==true) {
            alert('Captcha Matched');
        }

        else {
            alert('Captcha Does Not Match');
        }
    };
```

 
### Options

Listed are all the options available for react-simple-captcha

| Name | Description |
| ------ | ------ |
| **< LoadCanvasTemplate />** | It will load the captcha **with 'Reload Captcha'** functionality. Place between your render code, usage example **< LoadCanvasTemplate />** |
| **< LoadCanvasTemplateNoReload />** | It will load the captcha **without 'Reload Captcha'** functionality. Place between your render code, usage example **< LoadCanvasTemplateNoReload />**  |
| **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*);** | Simply paste it in **componentDidMount()**. Pass number of captcha characters you want to display. |
| **validateCaptcha(*User_Submitted_Value*)** | Will return *true* if user submitted value matches with captcha otherwise *false*. Also will reload captcha if user submitted value is *false*  |
| **validateCaptcha(*User_Submitted_Value*, *false*)** | Will return *true* if user submitted value matches with captcha otherwise *false*. Will not reload captcha if user submitted value is *false*  |
  
### Optional Changes
  
    
| **Options** | **All of these changes are optionals** |
| ------ | ------ |
| **< LoadCanvasTemplate reloadText="Reload My Captcha" />** | If you want to change the **"Reload Captcha"** with your own text |
| **< LoadCanvasTemplate reloadColor="red" />** | If you want to change the blue color of **"Reload Captcha"** |
| **< LoadCanvasTemplate reloadText="Reload My Captcha" reloadColor="red" />** | If you want to change the **"Reload Captcha"** text and it's blue color |
|  **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*, *Background_Color*);**  | If you want to change the background color from black to your custom color. Example Syntax to change the background color to red use: **loadCaptchaEnginge(6,'red');** |
|  **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*, *Background_Color*, *Font_Color*);**  | If you want to change the font color from white to your custom color. Example Syntax to change the font color to blue use: **loadCaptchaEnginge(6,'','blue');** |
|  **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*, *Background_Color*, *Font_Color*);**  | If you want to change the both background and font color. Example Syntax to change the background color to white and font color to black use: **loadCaptchaEnginge(6,'white','black');** |
|  **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*, *Background_Color*, *Font_Color*, *Upper_Characters_Only*);**  | If you want only upper characters and numbers use **loadCaptchaEnginge(6,'','','upper');** |
|  **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*, *Background_Color*, *Font_Color*, *Lower_Characters_Only*);**  | If you want only lower characters and numbers use **loadCaptchaEnginge(6,'','','lower');** |
|  **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*, *Background_Color*, *Font_Color*, *Numbers*);**  | If you want only numbers use **loadCaptchaEnginge(6,'','','numbers');** |
|  **loadCaptchaEnginge(*Number_Of_Captcha_Charcters*, *Background_Color*, *Font_Color*, *Special_Characters*);**  | If you want only special characters use **loadCaptchaEnginge(6,'','','special_char');** |
 
### Example
Let's create a class name **CaptchaTest** with react simple captcha functionality:

 ```sh
import React, { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



class CaptchaTest extends Component {

    componentDidMount () {
       loadCaptchaEnginge(6); 
    };

    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha)===true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6); 
            document.getElementById('user_captcha_input').value = "";
        }

        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
    };
 
    render() {
         

        return (<div>
            <div className="container">
                <div className="form-group">

                    <div className="col mt-3">
                        <LoadCanvasTemplate />
                    </div>

                    <div className="col mt-3">
                        <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                    </div>

                    <div className="col mt-3">
                        <div><button class="btn btn-primary" onClick={() => this.doSubmit()}>Submit</button></div>
                    </div>
                      
                </div>

            </div>
        </div>);
    };
}

export default CaptchaTest;
```
Import **CaptchaTest** in index.js
 ```sh
import CaptchaTest from './captcha_test'; 
```
Now replace **ReactDOM.render** with
 ```sh
ReactDOM.render(<CaptchaTest />, document.getElementById('root'));
```
### Support react-simple-captcha
[![Buy Me a Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-red.png "Buy Masroor Ejaz a Coffee. Thank You")](https://www.buymeacoffee.com/masroorejaz) 

### Rate react-simple-captcha
[![Rate Us](https://www.pngmart.com/files/7/Rate-Us-PNG-Transparent-Picture.png "Rate react-simple-captcha")](https://openbase.com/js/react-simple-captcha#rate)

### Browser support
Works in every modern browser which has support for [canvas element](https://caniuse.com/canvas-text "canvas element").

### License
react-simple-captcha is licensed under the [MIT license](https://opensource.org/licenses/MIT "MIT license").

### Author Profile
 
**Name:** Masroor Ejaz  
**Linkedin:** https://www.linkedin.com/in/masroorejaz/  
**Twitter:** https://twitter.com/masroorejaz  
**Note:** Feel free to contact me it you have any questions!
