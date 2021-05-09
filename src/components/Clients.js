import React from 'react';
import './Clients.css';
import clientsLine from './images/clientsimage.png';

function Clients() {
  return (
    <>
      <div className='clients-container'>
        <div className='client-image-container'>
          <img
            src={clientsLine}
            alt='client-line'
            className='client-line-image'
          />
        </div>
        <div
          className='client-list-container'
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-duration='1000'
        >
          <h3>clients</h3>
          <div className='client-list'>
            <h1 className='previous-clients'>
              <span id='obama'>obama for america</span>
              <img
                src='https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Obama_Biden_logo.svg/1200px-Obama_Biden_logo.svg.png'
                alt=''
                id='obama'
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='hillary'>hillary for america</span>
              <img
                src='https://www.iupat.org/wp-content/uploads/hillary-for-america.png'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='white-house'>the white house</span>
              <img
                src='https://www.adweek.com/wp-content/uploads/files/blogs/white-house-logo-final-hed-2016.jpg'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='a-two-four'>a24</span>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/A24_logo.svg/1200px-A24_logo.svg.png'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='mariah'>mariah carey</span>
              <img
                src='https://static01.nyt.com/images/2020/09/29/books/29Carey1/29Carey1-mediumSquareAt3X.jpg'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='netflix'>netflix</span>
              <img
                src='https://yt3.ggpht.com/ytc/AAUvwni_LdnpDi-SOIhjp4Kxo2l_yVBoYsfdDCpUM5VDzg=s900-c-k-c0x00ffffff-no-rj'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='vogue'>vogue magazine</span>
              <img
                src='https://assets.vogue.com/photos/593ef4c38ba2821cdbcb8fc8/master/w_2207,h_3000,c_limit/08-zendaya-coleman-vogue-july-2017.jpg'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
            <h1 className='previous-clients'>
              <span id='uber'>uber</span>
              <img
                src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022017/untitled-1_140.jpg?itok=1oBwROXU'
                alt=''
                className='hidden-client-image'
              />
            </h1>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
