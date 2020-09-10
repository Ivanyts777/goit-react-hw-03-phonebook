import React, { Component } from "react";
import styles from "./PhonebookForm.module.css";

class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    name || number !== ""
      ? this.props.addcontact(name, number)
      : alert("Введіть дані");

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={styles.phonebook}>
        <h2>Phponebook</h2>
        <form className={styles.phonebook__form} onSubmit={this.handleSubmit}>
          <label className={styles.form__title}>
            Name <br />
            <input
              className={styles.form__input}
              onChange={this.handleChange}
              value={name}
              type="text"
              placeholder="Name"
              name="name"
            ></input>
          </label>

          <br />
          <label className={styles.form__title}>
            Number <br />
            <input
              className={styles.form__input}
              onChange={this.handleChange}
              value={number}
              type="number"
              placeholder="+380"
              name="number"
            ></input>
          </label>

          <br />
          <button className={styles.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default PhonebookForm;
