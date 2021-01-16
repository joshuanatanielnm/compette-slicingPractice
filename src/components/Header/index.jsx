import React, { useState } from 'react'

import Nav from './Nav'
import NavMobile from './NavMobile'

export default function Header() {
  let navigasi = ['Learn', 'Categories', 'Stories', 'Partner', 'Investor']
  const [mobileNavClicked, setMobileNavClicked] = useState(false)
  console.log(mobileNavClicked)
  return (
    <header className='py-5'>
      <div className='container mx-auto lg:flex lg:justify-between lg:items-center'>
        <div className='flex items-center justify-between w-full'>
          <div className='self-center mx-3 md:mx-6'>
            <svg
              width='149'
              height='40'
              viewBox='0 0 149 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='20' cy='20' r='20' fill='#F2AD5F' />
              <circle cx='145' cy='20' r='4' fill='#F2AD5F' />
              <path
                d='M25.6178 29.168C22.9298 29.168 20.9458 28.472 19.6658 27.08C18.4018 25.688 17.7698 23.52 17.7698 20.576C17.7698 14.88 20.4178 12.032 25.7138 12.032C26.4978 12.032 27.2898 12.12 28.0898 12.296C28.8898 12.456 29.5138 12.664 29.9618 12.92C30.3618 13.144 30.5618 13.384 30.5618 13.64C30.5618 13.832 30.4818 14.088 30.3218 14.408C30.1778 14.712 30.0018 14.984 29.7938 15.224C29.6018 15.464 29.4258 15.584 29.2657 15.584C29.2178 15.584 29.0258 15.504 28.6898 15.344C28.3538 15.184 27.9298 15.04 27.4178 14.912C26.9218 14.784 26.3378 14.72 25.6658 14.72C24.0818 14.72 22.9058 15.2 22.1378 16.16C21.3858 17.12 21.0098 18.6 21.0098 20.6C21.0098 22.568 21.3858 24.04 22.1378 25.016C22.9058 25.992 24.0658 26.48 25.6178 26.48C26.3538 26.48 26.9938 26.4 27.5378 26.24C28.0818 26.08 28.6018 25.88 29.0978 25.64C29.3538 25.512 29.5298 25.448 29.6258 25.448C29.8018 25.448 29.9778 25.568 30.1537 25.808C30.3458 26.032 30.5058 26.296 30.6338 26.6C30.7618 26.904 30.8258 27.12 30.8258 27.248C30.8258 27.616 30.5538 27.952 30.0098 28.256C29.4978 28.544 28.8338 28.768 28.0178 28.928C27.2018 29.088 26.4018 29.168 25.6178 29.168ZM39.7684 29.168C37.3204 29.168 35.4404 28.432 34.1284 26.96C32.8164 25.488 32.1604 23.36 32.1604 20.576C32.1604 17.808 32.8164 15.696 34.1284 14.24C35.4404 12.768 37.3204 12.032 39.7684 12.032C42.2164 12.032 44.0884 12.76 45.3844 14.216C46.6964 15.672 47.3524 17.792 47.3524 20.576C47.3524 23.36 46.6964 25.488 45.3844 26.96C44.0884 28.432 42.2164 29.168 39.7684 29.168ZM39.7684 26.48C41.1764 26.48 42.2484 25.976 42.9844 24.968C43.7364 23.96 44.1124 22.496 44.1124 20.576C44.1124 18.656 43.7444 17.2 43.0084 16.208C42.2724 15.216 41.1924 14.72 39.7684 14.72C38.3444 14.72 37.2564 15.216 36.5044 16.208C35.7684 17.2 35.4004 18.656 35.4004 20.576C35.4004 22.496 35.7684 23.96 36.5044 24.968C37.2564 25.976 38.3444 26.48 39.7684 26.48ZM58.2831 24.752C57.9151 24.752 57.6431 24.616 57.4671 24.344L54.0591 18.32C53.8671 18.048 53.6831 17.72 53.5071 17.336L53.4111 17.36C53.4271 17.632 53.4351 18.04 53.4351 18.584V28.352C53.4351 28.816 53.0111 29.048 52.1631 29.048H51.6351C50.7871 29.048 50.3631 28.816 50.3631 28.352V12.848C50.3631 12.384 50.7871 12.152 51.6351 12.152H52.7631C53.4511 12.152 53.8991 12.344 54.1071 12.728L58.2831 20.096C58.4431 20.368 58.5711 20.632 58.6671 20.888C58.7311 20.68 58.8591 20.408 59.0511 20.072L63.2511 12.728C63.4591 12.344 63.8991 12.152 64.5711 12.152H65.6751C66.5231 12.152 66.9471 12.384 66.9471 12.848V28.352C66.9471 28.816 66.5231 29.048 65.6751 29.048H65.1471C64.2991 29.048 63.8751 28.816 63.8751 28.352V18.632C63.8751 18.088 63.8831 17.68 63.8991 17.408L63.8031 17.384C63.6271 17.768 63.4431 18.096 63.2511 18.368L59.8671 24.344C59.6911 24.616 59.4191 24.752 59.0511 24.752H58.2831ZM71.8376 29.048C71.3896 29.048 71.0616 28.992 70.8536 28.88C70.6616 28.768 70.5656 28.592 70.5656 28.352V13.088C70.5656 12.784 70.6296 12.56 70.7576 12.416C70.9016 12.272 71.1256 12.2 71.4296 12.2H76.4216C77.8936 12.2 79.1896 12.552 80.3096 13.256C81.4296 13.96 81.9896 15.296 81.9896 17.264C81.9896 18.64 81.6616 19.712 81.0056 20.48C80.3656 21.248 79.6376 21.768 78.8216 22.04C78.0216 22.296 77.3016 22.424 76.6616 22.424H73.7096V28.352C73.7096 28.816 73.2856 29.048 72.4376 29.048H71.8376ZM76.3976 19.712C77.0216 19.712 77.5736 19.536 78.0536 19.184C78.5336 18.816 78.7736 18.176 78.7736 17.264C78.7736 16.384 78.5256 15.768 78.0296 15.416C77.5336 15.064 76.9496 14.888 76.2776 14.888H73.7096V19.712H76.3976ZM85.3571 29C85.0531 29 84.8291 28.928 84.6851 28.784C84.5411 28.64 84.4691 28.416 84.4691 28.112V13.088C84.4691 12.768 84.5411 12.544 84.6851 12.416C84.8291 12.272 85.0531 12.2 85.3571 12.2H93.7571C93.9811 12.2 94.1411 12.28 94.2371 12.44C94.3491 12.6 94.4051 12.864 94.4051 13.232V13.856C94.4051 14.224 94.3491 14.488 94.2371 14.648C94.1411 14.808 93.9811 14.888 93.7571 14.888H87.6131V19.064H93.0851C93.3091 19.064 93.4691 19.144 93.5651 19.304C93.6771 19.464 93.7331 19.728 93.7331 20.096V20.72C93.7331 21.088 93.6771 21.352 93.5651 21.512C93.4691 21.672 93.3091 21.752 93.0851 21.752H87.6131V26.312H93.7811C94.0051 26.312 94.1651 26.392 94.2611 26.552C94.3731 26.712 94.4291 26.976 94.4291 27.344V27.968C94.4291 28.336 94.3731 28.6 94.2611 28.76C94.1651 28.92 94.0051 29 93.7811 29H85.3571ZM101.843 29.048C100.995 29.048 100.571 28.816 100.571 28.352V14.888H96.4907C96.2667 14.888 96.0987 14.808 95.9867 14.648C95.8907 14.488 95.8427 14.224 95.8427 13.856V13.232C95.8427 12.864 95.8907 12.6 95.9867 12.44C96.0987 12.28 96.2667 12.2 96.4907 12.2H107.795C108.019 12.2 108.179 12.28 108.275 12.44C108.387 12.6 108.443 12.864 108.443 13.232V13.856C108.443 14.224 108.387 14.488 108.275 14.648C108.179 14.808 108.019 14.888 107.795 14.888H103.739V28.352C103.739 28.816 103.315 29.048 102.467 29.048H101.843ZM115.015 29.048C114.167 29.048 113.743 28.816 113.743 28.352V14.888H109.663C109.439 14.888 109.271 14.808 109.159 14.648C109.063 14.488 109.015 14.224 109.015 13.856V13.232C109.015 12.864 109.063 12.6 109.159 12.44C109.271 12.28 109.439 12.2 109.663 12.2H120.967C121.191 12.2 121.351 12.28 121.447 12.44C121.559 12.6 121.615 12.864 121.615 13.232V13.856C121.615 14.224 121.559 14.488 121.447 14.648C121.351 14.808 121.191 14.888 120.967 14.888H116.911V28.352C116.911 28.816 116.487 29.048 115.639 29.048H115.015ZM124.802 29C124.498 29 124.274 28.928 124.13 28.784C123.986 28.64 123.914 28.416 123.914 28.112V13.088C123.914 12.768 123.986 12.544 124.13 12.416C124.274 12.272 124.498 12.2 124.802 12.2H133.202C133.426 12.2 133.586 12.28 133.682 12.44C133.794 12.6 133.85 12.864 133.85 13.232V13.856C133.85 14.224 133.794 14.488 133.682 14.648C133.586 14.808 133.426 14.888 133.202 14.888H127.058V19.064H132.53C132.754 19.064 132.914 19.144 133.01 19.304C133.122 19.464 133.178 19.728 133.178 20.096V20.72C133.178 21.088 133.122 21.352 133.01 21.512C132.914 21.672 132.754 21.752 132.53 21.752H127.058V26.312H133.226C133.45 26.312 133.61 26.392 133.706 26.552C133.818 26.712 133.874 26.976 133.874 27.344V27.968C133.874 28.336 133.818 28.6 133.706 28.76C133.61 28.92 133.45 29 133.226 29H124.802Z'
                fill='white'
              />
            </svg>
          </div>
          {/* Button Mobile Navbar */}
          <button
            className='flex items-center px-3 py-2 mx-2 bg-white border rounded lg:hidden hover:border-white'
            onClick={() => setMobileNavClicked(!mobileNavClicked)}
          >
            <svg
              className='w-4 h-4 '
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
          {/* End Button Mobile Navbar */}
        </div>
        <div className='items-center mt-2 lg:flex '>
          <div className='absolute mt-4 bg-black left-4 right-4 rounded-xl'>
            {mobileNavClicked && (
              <div className='flex flex-col lg:flex-row lg:mx-6 lg:hidden'>
                {navigasi.map((value, index) => (
                  <NavMobile value={value} key={index} />
                ))}
              </div>
            )}
          </div>

          <div className='hidden lg:flex lg:flex-row lg:mx-6'>
            {navigasi.map((value, index) => (
              <Nav value={value} key={index} />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
