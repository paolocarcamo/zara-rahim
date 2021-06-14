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
          <a
            href='https://variety.com/2021/tv/reviews/ziwe-tv-review-showtime-gloria-steinem-1234968788/'
            target='https://variety.com/2021/tv/reviews/ziwe-tv-review-showtime-gloria-steinem-1234968788/'
          >
            <h2>
              'Ziwe' Is a Fully-Formed Bit{' '}
              <span className='press-mobile-break'>of</span>
              Comic Brilliance
            </h2>
          </a>
          <br />
          <h3>new york magazine</h3>
          <br />
          <a
            href='https://www.vulture.com/article/mariah-carey-rarities-profile.html'
            target='https://www.vulture.com/article/mariah-carey-rarities-profile.html'
          >
            <h2>
              Thirty years into an epic{' '}
              <span className='press-mobile-break'>career,</span> Mariah Carey{' '}
              <span className='press-desktop-break'>is</span> still trying{' '}
              <span className='press-mobile-break'>to</span> explain herself.
            </h2>
          </a>
          <br />
          <h3>the new yorker</h3>
          <br />
          <a
            href='https://www.newyorker.com/magazine/2021/03/08/an-instagram-influencer-recruits-a-listers-to-help-rescue-the-mta'
            target='https://www.newyorker.com/magazine/2021/03/08/an-instagram-influencer-recruits-a-listers-to-help-rescue-the-mta'
          >
            <h2>
              An Instagram{' '}
              <span className='press-mobile-break'>Influencer</span> Recruits
              A-Listers <span className='press-desktop-break'>to</span> Help{' '}
              <span className='press-mobile-break'>Rescue</span> the M.T.A.
            </h2>
          </a>
          <br />
          <h3>the new york times</h3>
          <br />
          <a
            href='https://www.nytimes.com/2020/06/30/business/dealbook/netflix-black-owned-banks.html'
            target='https://www.nytimes.com/2020/06/30/business/dealbook/netflix-black-owned-banks.html'
          >
            <h2>
              Netflix's Big Idea to Support{' '}
              <span className='press-mobile-break'>Black</span> Communities
            </h2>
          </a>
          <br />
          <h3>the business of fashion</h3>
          <br />
          <a
            href='https://www.businessoffashion.com/articles/news-analysis/president-wintour-part-1'
            target='https://www.businessoffashion.com/articles/news-analysis/president-wintour-part-1'
          >
            <h2>
              Anna Wintour on Politics and{' '}
              <span className='press-mobile-break'>the</span>{' '}
              <span className='press-desktop-break'>Fashion</span> Business in
              <span className='press-mobile-break'>Trump's</span> America
            </h2>
          </a>
          <br />
          <h3>the washington post</h3>
          <br />
          <a
            href='https://www.washingtonpost.com/lifestyle/style/fashion-is-finally-figuring-out-diversity--in-ways-that-actually-matter/2017/09/06/a16333a6-88f0-11e7-a94f-3139abce39f5_story.html?utm_term=.4e05c2a663e6'
            target='https://www.washingtonpost.com/lifestyle/style/fashion-is-finally-figuring-out-diversity--in-ways-that-actually-matter/2017/09/06/a16333a6-88f0-11e7-a94f-3139abce39f5_story.html?utm_term=.4e05c2a663e6'
          >
            <h2>
              Fashion is finally figuring{' '}
              <span className='press-mobile-break'>out</span>{' '}
              <span className='press-mobile-break'>
                diversity – <span className='press-desktop-break'></span>
              </span>{' '}
              in ways that actually matter
            </h2>
          </a>
          <br />
          <h3>the huffington post</h3>
          <br />
          <a
            href='https://www.huffpost.com/entry/hillary-clinton-muslim-outreach_n_5800fe72e4b0e8c198a7a27c?ipvdghudrhl2i6bt9='
            target='https://www.huffpost.com/entry/hillary-clinton-muslim-outreach_n_5800fe72e4b0e8c198a7a27c?ipvdghudrhl2i6bt9='
          >
            <h2>
              Hillary Clinton Is{' '}
              <span className='press-mobile-break'>Organizing</span>
              Muslim <span className='press-mobile-break'>Voters.</span>{' '}
              <span className='press-desktop-break'>They</span> Could Decide The
              Election.
            </h2>
          </a>
        </div>
      </div>
    </>
  );
}

export default Press;
