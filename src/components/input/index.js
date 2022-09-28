import React from "react";

const FormInput = ({value, setValue, label,required = true,inputOptions = {}}) => {
    return (
        <div className="form-group row">
            <label htmlFor={label.toLowerCase()} className="col-md-4 col-form-label text-md-right">{label}</label>

            <div className="col-md-6">
                <input
                    type={label.toLowerCase()}
                    required={required}
                    onChange={(e) => setValue(e.target.value)}
                    autoComplete={label.toLowerCase()}
                    className="form-control" value={value}
                    autoFocus/>

                <span className="invalid-feedback" role="alert">
                    <strong></strong>
                </span>
            </div>
        </div>
    )
}
export default FormInput