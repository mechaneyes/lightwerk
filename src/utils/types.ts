/* eslint-disable no-unused-vars */
export interface PhotoType {
  slug: string
  id: number
  url: string
  height: string
  width: string
  public_id: string
  format: string
  filename?: string
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