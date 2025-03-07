import type {PropsWithChildren, ReactElement} from 'react'
import TextBlock from '@/components/TextBlock'

export type CollectionPageProps = {
  cover?: ReactElement
}

export default function CollectionPage ({cover, children}: PropsWithChildren<CollectionPageProps>) {
  return (
    <>
      {cover && <TextBlock shrink>{cover || null}</TextBlock>}
      <div className='flex flex-wrap gap-4'>
        {children}
      </div>
    </>
  )
}

CollectionPage.displayName = 'CollectionPage'
