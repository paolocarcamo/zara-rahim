import React from 'react';
import './Press.css';
import pressLine from './images/expertiseimage.png';

function Press() {
  return (
    <>
      <div className='press-container'>
        <div className='press-image-container'>
          <img src={pressLine} alt='press-line' className='press-image' />
        </div>
        <div
          className='list-of-press'
          data-aos='fade-right'
          data-aos-offset='10'
          data-aos-duration='1000'
        >
          <h4 id='press-header'>press</h4> <br />
          <h3>variety</h3>
          <br />
          <a href='https://variety.com/2021/tv/reviews/ziwe-tv-review-showtime-gloria-steinem-1234968788/'>
            <h2>
              'Ziwe' Is a{' '}
              <span className='press-mobile-break'>Fully-Formed</span> Bit of
              Comic Brilliance
            </h2>
          </a>
          <br />
          <h3>new york magazine</h3>
          <br />
          <a href='https://www.vulture.com/article/mariah-carey-rarities-profile.html'>
            <h2>
              Thirty years into an{' '}
              <span className='press-mobile-break'>epic</span> career, Mariah
              Carey{' '}
              <span className='press-mobile-break'>
                <span className='press-desktop-break'>is</span>
              </span>{' '}
              still trying to{' '}
              <span className='press-mobile-break'>explain</span> herself.
            </h2>
          </a>
          <br />
          <h3>the new yorker</h3>
          <br />
          <a href='https://www.newyorker.com/magazine/2021/03/08/an-instagram-influencer-recruits-a-listers-to-help-rescue-the-mta'>
            <h2>
              An Instagram{' '}
              <span className='press-mobile-break'>Influencer</span> Recruits
              A-Listers <span className='press-desktop-break'>to</span>{' '}
              <span className='press-mobile-break'>Help</span> Rescue the M.T.A.
            </h2>
          </a>
          <br />
          <h3>the new york times</h3>
          <br />
          <a href='https://www.nytimes.com/2020/06/30/business/dealbook/netflix-black-owned-banks.html'>
            <h2>
              Netflix's Big Idea <span className='press-mobile-break'>to</span>{' '}
              Support <span className='press-mobile-break'>Black</span>{' '}
              Communities
            </h2>
          </a>
          <br />
          <h3>the business of fashion</h3>
          <br />
          <a href='https://www.businessoffashion.com/articles/news-analysis/president-wintour-part-1'>
            <h2>
              Anna Wintour on{' '}
              <span className='press-mobile-break'>Politics</span> and the{' '}
              <span className='press-desktop-break'>Fashion</span>{' '}
              <span className='press-mobile-break'>Business</span> in Trump's
              America
            </h2>
          </a>
          <br />
          <h3>the washington post</h3>
          <br />
          <a href='https://www.washingtonpost.com/lifestyle/style/fashion-is-finally-figuring-out-diversity--in-ways-that-actually-matter/2017/09/06/a16333a6-88f0-11e7-a94f-3139abce39f5_story.html?utm_term=.4e05c2a663e6'>
            <h2>
              Fashion is finally{' '}
              <span className='press-mobile-break'>figuring</span> out diversity{' '}
              <span className='press-desktop-break'>
                <span className='press-mobile-break'>–</span>
              </span>{' '}
              in ways that <span className='press-mobile-break'>actually</span>{' '}
              matter
            </h2>
          </a>
          <br />
          <h3>the huffington post</h3>
          <br />
          <a href='https://www.huffpost.com/entry/hillary-clinton-muslim-outreach_n_5800fe72e4b0e8c198a7a27c?ipvdghudrhl2i6bt9='>
            <h2>
              Hillary Clinton <span className='press-mobile-break'>Is</span>{' '}
              Organizing <span className='press-mobile-break'>Muslim</span>{' '}
              Voters. <span className='press-desktop-break'>They</span>{' '}
              <span className='press-mobile-break'>Could </span>
              Decide The Election.
            </h2>
          </a>
        </div>
      </div>
    </>
  );
}

export default Press;
