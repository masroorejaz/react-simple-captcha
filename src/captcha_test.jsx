import React, { Component } from 'react'; 
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from './hooks/react-simple-captcha';

class CaptchaTest extends Component {
    componentDidMount () {
        loadCaptchaEnginge(6, 'white', 'black'); 
    };

    doSubmit = () => {
        const user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha)) {
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
        return (
            <div>
                <div className="container">
                    <div className="form-group">
                        <div className="col mt-3">
                            <LoadCanvasTemplate reloadText="Reload The Damn Captcha" reloadColor="red" />
                        </div>

                        <div className="col mt-3">
                            <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                        </div>

                        <div className="col mt-3">
                            <div><button className="btn btn-primary" onClick={() => this.doSubmit()}>Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default CaptchaTest;
