/* eslint-disable no-unused-vars */
export interface PhotoType {
  slug: string
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
}

export interface SharedModalProps {
  index: number
  images?: PhotoType[]
  currentPhoto?: PhotoType
  changePhotoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}