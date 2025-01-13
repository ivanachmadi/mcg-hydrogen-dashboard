import React from 'react'
import NewsList from './ui/news-list'


const newsItems = [
  { title: 'Barclays Entrepreneur Awards 2024', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7261776788819734528/'},
  { title: 'The Cranfield-Colworth Innovation Challenge', link: 'https://www.cranfield.ac.uk/press/news-2024/69-million-boost-for-hydrogen-at-cranfield' },
  { title: 'Innovate UK KTN - AKT2I', link: 'https://www.cranfield.ac.uk/som/research-projects/iot-blockchain-integrated-platform-for-maritime-shipping-industry' },
  { title: 'Cranfield CH2i Initiative', link: 'https://cranfield.shorthandstories.com/ch2i/' },
  /*
  { title: 'Global Hydrogen Investments: Leading the Change Towards a Greener Future', link: 'https://www.linkedin.com/posts/mcg-uk_hydrogenrevolution-cleanenergy-sustainablefuture-activity-7232661596823580673-x7Z1?utm_source=share&utm_medium=member_ios' },
  */
  ];

const Awards = () => {
  return (
    <div className='flex flex-col items-center mt-4 mb-12'>
      <div className='max-w-2xl'>
        <h1 className='text-4xl font-bold text-green-800 text-center mt-8'>
          Awards
        </h1>
        <br></br>
        <NewsList items={newsItems} />
      </div>
    </div>
  )
}

export default Awards