'use client'

import React, { useState, useCallback, useRef } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { supabase } from '@/lib/supabase'

interface ImageCropModalProps {
  isOpen: boolean
  onClose: () => void
  imageFile: File
  onImageUploaded: (imageUrl: string) => void
  aspectRatio?: number
}

export default function ImageCropModal({
  isOpen,
  onClose,
  imageFile,
  onImageUploaded,
  aspectRatio = 16 / 9 // Default to 16:9 for hero images
}: ImageCropModalProps) {
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [isUploading, setIsUploading] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>('')
  const imgRef = useRef<HTMLImageElement>(null)

  // Convert file to data URL when component mounts or file changes
  React.useEffect(() => {
    if (imageFile) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImageSrc(reader.result as string)
      })
      reader.readAsDataURL(imageFile)
    }
  }, [imageFile])

  // Initialize crop when image loads
  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget
    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspectRatio,
        width,
        height
      ),
      width,
      height
    )
    setCrop(crop)
  }, [aspectRatio])

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', (error) => reject(error))
      image.setAttribute('crossOrigin', 'anonymous')
      image.src = url
    })

  const getCroppedImg = async (
    image: HTMLImageElement,
    pixelCrop: PixelCrop
  ): Promise<Blob> => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('No 2d context')
    }

    const maxSize = 2048

    // react-image-crop provides pixel coordinates relative to the displayed image
    // We need to scale them to the actual image dimensions
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    console.log('Scale factors:', scaleX, scaleY)

    // Scale the crop coordinates to match the actual image dimensions
    const scaledCrop = {
      x: pixelCrop.x * scaleX,
      y: pixelCrop.y * scaleY,
      width: pixelCrop.width * scaleX,
      height: pixelCrop.height * scaleY
    }

    console.log('Scaled crop coordinates:', scaledCrop)

    // Set canvas size to match the crop area (use original crop size for output)
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    // Draw the cropped image onto the canvas
    ctx.drawImage(
      image,
      scaledCrop.x,
      scaledCrop.y,
      scaledCrop.width,
      scaledCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )

    // Scale down if too large
    if (canvas.width > maxSize || canvas.height > maxSize) {
      const scale = maxSize / Math.max(canvas.width, canvas.height)
      const scaledCanvas = document.createElement('canvas')
      const scaledCtx = scaledCanvas.getContext('2d')

      if (!scaledCtx) {
        throw new Error('No 2d context')
      }

      scaledCanvas.width = canvas.width * scale
      scaledCanvas.height = canvas.height * scale

      scaledCtx.drawImage(canvas, 0, 0, scaledCanvas.width, scaledCanvas.height)
      return new Promise((resolve) => {
        scaledCanvas.toBlob((blob) => {
          if (blob) resolve(blob)
        }, 'image/jpeg', 0.9)
      })
    }

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob)
      }, 'image/jpeg', 0.9)
    })
  }

  const handleCropAndUpload = async () => {
    if (!completedCrop || !imgRef.current) return

    setIsUploading(true)
    try {
      // Debug logging
      console.log('Displayed image dimensions:', imgRef.current.width, imgRef.current.height)
      console.log('Natural image dimensions:', imgRef.current.naturalWidth, imgRef.current.naturalHeight)
      console.log('Crop coordinates:', completedCrop)
      
      // Use the actual image element from the ref instead of creating a new one
      const image = imgRef.current
      
      // Create cropped image blob
      const croppedImageBlob = await getCroppedImg(image, completedCrop)
      
      // Generate unique filename
      const timestamp = Date.now()
      const fileName = `brand-hero-${timestamp}.jpg`
      
      // Upload to Supabase storage
      const { data, error } = await supabase.storage
        .from('brand_image')
        .upload(fileName, croppedImageBlob, {
          contentType: 'image/jpeg',
          upsert: false
        })

      if (error) {
        console.error('Error uploading cropped image:', error)
        alert('Error uploading image. Please try again.')
        return
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('brand_image')
        .getPublicUrl(fileName)

      if (urlData?.publicUrl) {
        onImageUploaded(urlData.publicUrl)
        onClose()
      }
    } catch (error) {
      console.error('Error processing image:', error)
      alert('Error processing image. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  if (!isOpen || !imageSrc) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full bg-white max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-arpona font-bold text-gray-900">
            Crop & Position Image
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors rounded-full"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cropper */}
        <div className="relative flex-1 bg-gray-100 border border-gray-200 flex items-center justify-center min-h-0">
          {imageSrc && (
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspectRatio}
              minWidth={50}
              minHeight={50}
            >
              <img
                ref={imgRef}
                alt="Crop me"
                src={imageSrc}
                onLoad={onImageLoad}
                className="max-h-full max-w-full object-contain"
              />
            </ReactCrop>
          )}
        </div>

        {/* Controls */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-inter text-gray-600">
              <strong>Instructions:</strong> Drag the corners to resize the crop area, or drag the center to move it around.
            </div>
            
            <div className="text-sm font-inter text-gray-600">
              Aspect Ratio: {aspectRatio === 16/9 ? '16:9' : aspectRatio === 1 ? '1:1' : `${aspectRatio.toFixed(2)}:1`}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-inter font-bold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              onClick={handleCropAndUpload}
              disabled={isUploading || !completedCrop}
              className="flex-1 px-4 py-2 text-sm font-inter font-bold text-white bg-[#A5C8CE] hover:bg-[#8bb3b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
