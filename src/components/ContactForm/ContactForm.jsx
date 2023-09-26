import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChnage = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
}
