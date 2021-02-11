import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Alert.module.css';

const alertRoot = document.querySelector('#popap-root');

export default class Alert extends Component {
  render() {
    return createPortal(
      <div className={s.popup}>{this.props.children} </div>,
      alertRoot,
    );
  }
}
