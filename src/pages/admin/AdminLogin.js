import React,{Component} from 'react';
import './admin.css';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
const FormItem = Form.Item;


class AdminLogin extends Component{
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            // http
            let data = {
                user:{
                    username:values.username,
                    password:values.password
                },
                remember:values.remember
            },
            url = "users/login";
            window.$http.post(url,data).then(res=>{
                console.log("success",res);
                if(res.data.resp_code === '000000'){
                    message.success(res.data.result.nickname + " 登录成功！");
                    this.props.history.push('/home');
                }else{
                    message.error(res.data.resp_message);
                }
            }).catch(err =>{
                console.log("error",err);
            })

          }else{
              console.log('has a err: ',err);
              
          }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
        <div className="login-box">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}               
                    <div><Button type="primary" htmlType="submit" className="login-form-button">Log in</Button></div>            
                    <div><a className="login-form-forgot" href="">Forgot password</a>Or <a href="">register now!</a></div>
                    </FormItem>
            </Form>
        </div>
        );
    }

}

export default Form.create()(AdminLogin);;