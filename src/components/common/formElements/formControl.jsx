import React from "react";
import styles from "./formControl.module.scss";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
                {props.type === "checkbox" ? <label htmlFor={'rememberMe'}>remember me</label> : null }
            </div>
            { hasError && <span className={styles.hoverEror}>!<span className={styles.hoveredEror}>{meta.error}</span></span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}