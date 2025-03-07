import SlideDeck from '@/components/SlideDeck'
import Text from '@/components/TextSlide'
import Image from '@/components/ImageSlide'

import TranslationOfMovement from './translation-of-movement.mdx'

import img0 from './images/img_0.jpg'
import img1 from './images/img_1.jpg'
import img2 from './images/img_2.jpg'
import img3 from './images/img_3.jpg'
import img4 from './images/img_4.jpg'
import img5 from './images/img_5.jpg'
import img6 from './images/img_6.jpg'

export default function Page () {
  return (
    <SlideDeck>
      <Text><TranslationOfMovement /></Text>
      <Image
        src={img0}
        alt={{
          en: 'Video Still',
          fr: ''
        }}
        caption={{
          en: 'Video Still',
          fr: ''
        }}
      />
      <Image
        src={img1}
        alt={{
          en: 'Video Still',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img2}
        alt={{
          en: 'Video Still',
          fr: ''
        }}
        caption={{
          en: 'Video Still',
          fr: ''
        }}
      />
      <Image
        src={img3}
        alt={{
          en: 'Video Still',
          fr: ''
        }}
        caption={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img4}
        alt={{
          en: '',
          fr: ''
        }}
      />
      <Image
        src={img5}
        alt={{
          en: 'Installation View from "Proof 26" at Gallery44, Toronto. 2019 (photo by Darren Rigo)',
          fr: ''
        }}
        caption={{
          en: 'Installation View from "Proof 26" at Gallery44, Toronto. 2019 (photo by Darren Rigo)',
          fr: ''
        }}
      />
      <Image
        src={img6}
        alt={{
          en: 'Installation View from "Proof 26" at Gallery44, Toronto. 2019 (photo by Darren Rigo)',
          fr: ''
        }}
        caption={{
          en: "Installation View from 'Proof 26' at Gallery44, Toronto. 2019 (photo by Darren Rigo)",
          fr: ''
        }}
      />
    </SlideDeck>
  )
}
