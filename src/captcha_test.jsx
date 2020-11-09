import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { loadcaptchaenginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from './hooks/react-simple-captcha';



class CaptchaTest extends Component {

    componentDidMount () {
       loadcaptchaenginge(6); 
    };

    doSubmit = () => {
        let user_captcha = document.getElementById('captcha').value;

        if (validateCaptcha(user_captcha)==true) {
            alert('Captcha Matched');
            loadcaptchaenginge(6); 
            document.getElementById('captcha').value = "";
        }

        else {
            alert('Captcha Does Not Match');
            document.getElementById('captcha').value = "";
        }
    };
 
    render() {
         

        return (<div>
            <div className="container">
                <div className="form-group">


                    

                    <div className="col mt-3">
                        {ReactHtmlParser(LoadCanvasTemplate)}
                    </div>

                   
                    <div className="col mt-3">
                        <div><input placeholder="Enter Captcha Value" id="captcha" name="captcha" type="text"></input></div>
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
