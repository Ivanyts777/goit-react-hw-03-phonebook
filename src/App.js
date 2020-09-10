import React, { Component } from "react";
import PhonebookForm from "./Components/PhonebookForm/PhonebookForm";
import PhonebookContacts from "./Components/PhonebookContacts/PhonebookContacts";
import PhonebookFilter from "./Components/PhonebookFilter/PhonebookFilter";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidUpdate(prevState) {
    prevState.contacts !== this.state.contacts &&
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    const persistedTasks = localStorage.getItem("contacts");
    persistedTasks &&
      this.setState({
        contacts: JSON.parse(persistedTasks),
      });
  }

  addcontact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const checkContactName = this.state.contacts.find(
      (contact) => contact.name === name
    );
    if (!checkContactName) {
      this.setState((state) => ({
        contacts: [...state.contacts, contact],
      }));
    } else {
      alert("Контакт вже збережений");
    }
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (id) => {
    this.setState((state) => {
      return {
        contacts: state.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterMasyv = this.filterContact();
    return (
      <div className="fhonebook">
        <PhonebookForm addcontact={this.addcontact} />
        {contacts.length > 1 && (
          <PhonebookFilter
            valueFilter={filter}
            changeFilter={this.changeFilter}
          />
        )}
        {contacts.length > 0 ? (
          <PhonebookContacts
            contacts={filterMasyv}
            removeContact={this.removeContact}
          />
        ) : (
          "Empty list"
        )}
      </div>
    );
  }
}

export default App;
