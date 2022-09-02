import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { createField, Input } from "../common/FormsControls/FormsControls"
import { login } from "../redux/auth-reducer"
import styles from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({ handleSubmit, error, captcha }) => {
    return <form onSubmit={handleSubmit}>
        {createField("email", "email", [required], Input)}
        {createField("password", "password", [required], Input, { type: "password" })}
        {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
        {captcha &&
            <div>
                <img alt="" src={captcha} />
                {createField("Enter symbol", "captcha", [required], Input, {})}
            </div>
        }
        {error &&
            <div className={styles.commonError}>
                <span> {error}</span>
            </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }
    if (props.isAuth) {
        return <Navigate to={"/maincontent"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})
export default connect(mapStateToProps, { login })(Login) 