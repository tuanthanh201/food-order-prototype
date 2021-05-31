import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  //#region
  // name
  const {
    value: name,
    valueIsValid: nameIsValid,
    valueIsInvalid: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  // street
  const {
    value: street,
    valueIsValid: streetIsValid,
    valueIsInvalid: streetIsInvalid,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((value) => value.trim() !== "");
  // postal code
  const {
    value: postalCode,
    valueIsValid: postalCodeIsValid,
    valueIsInvalid: postalCodeIsInvalid,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: postalCodeReset,
  } = useInput((value) => value.trim() !== "");
  // city
  const {
    value: city,
    valueIsValid: cityIsValid,
    valueIsInvalid: cityIsInvalid,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.trim() !== "");
  //#endregion
  const formIsValid =
    nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const data = {
      name,
      street,
      postalCode,
      city,
    };
    console.log(data);
    props.onConfirm(data);
    nameReset();
    streetReset();
    postalCodeReset();
    cityReset();
  };

  const nameClasses = `${classes.control}  ${
    nameIsInvalid ? classes.invalid : ""
  }`;
  const streetClasses = `${classes.control}  ${
    streetIsInvalid ? classes.invalid : ""
  }`;
  const postalCodeClasses = `${classes.control}  ${
    postalCodeIsInvalid ? classes.invalid : ""
  }`;
  const cityClasses = `${classes.control}  ${
    cityIsInvalid ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler} autoComplete="off">
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameIsInvalid && (
          <p className={classes["error-text"]}>Please enter your name.</p>
        )}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={street}
        />
        {streetIsInvalid && (
          <p className={classes["error-text"]}>Please enter street name.</p>
        )}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={postalCode}
        />
        {postalCodeIsInvalid && (
          <p className={classes["error-text"]}>
            Please enter your postal code.
          </p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={city}
        />
        {cityIsInvalid && (
          <p className={classes["error-text"]}>Please enter city name.</p>
        )}
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes["button--alt"]}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
