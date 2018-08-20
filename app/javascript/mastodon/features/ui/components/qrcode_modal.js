import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { injectIntl } from 'react-intl';
import QRCode  from 'qrcode';

@injectIntl
export default class QrcodeModal extends ImmutablePureComponent {

  static propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  }

  state = {
    loading: false,
    data: null,
  };

  componentDidMount () {
    const { account } = this.props;

    this.setState({ loading: true });
    QRCode.toDataURL(account.get('url'))
      .then(ul => {
      this.setState({ data: ul });
      })
  }

  setIframeRef = c =>  {
    this.iframe = c;
  }

  setQRcode = c =>  {
    this.qr = c;
  }

  handleTextareaClick = (e) => {
    e.target.select();
  }

  render () {
    const { data } = this.state;

    return (
      <div className='modal-root__modal embed-modal'>
        <h4>QR Code</h4>

        <div className='embed-modal__container'>
          <p className='hint'>
            Easy access your account page by scanning the qr code below.
          </p>

          <img className='embed-modal__qrcode' src={data}/>
        </div>
      </div>
    );
  }

}
