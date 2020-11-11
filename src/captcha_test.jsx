import React, { Component } from 'react'; 
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



class CaptchaTest extends Component {

    componentDidMount () {
        loadCaptchaEnginge(6); 
    };

    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha)==true) {
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
                        < LoadCanvasTemplate />
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
