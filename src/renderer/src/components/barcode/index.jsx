import React, { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import Quagga from 'quagga'
import barSound from '../../assets/sound/barcode.mp3'

const BarcodeScanner = ({ products, dispatch, setCurrentCart, currentCart }) => {
  const webcamRef = useRef(null)
  const audioRef = useRef(null)
  const [facingMode, setFacingMode] = useState('environment')

  useEffect(() => {
    const handleDetect = (result) => {
      if (result && result.codeResult && result.codeResult.code) {
        const code = result.codeResult.code
        const item = products?.find((product) => product?.barcode == code)
        if (item) {
          const theItem = currentCart?.items?.find((product) => +product.id == +item.id)
          console.log(currentCart.items)
          console.log(theItem)
          if (!theItem) {
            dispatch(setCurrentCart(item))
            if (audioRef.current) {
              audioRef.current.play()
            }
          }
        }
      }
    }

    if (webcamRef.current) {
      Quagga.init(
        {
          inputStream: {
            type: 'LiveStream',
            target: webcamRef.current.video,
            constraints: {
              facingMode
            }
          },
          decoder: {
            readers: [
              'code_128_reader',
              'ean_reader',
              'ean_8_reader',
              'code_39_reader',
              'code_39_vin_reader',
              'codabar_reader',
              'upc_reader',
              'upc_e_reader',
              'i2of5_reader'
            ]
          }
        },
        (err) => {
          if (err) {
            console.error(err)
            return
          }
          Quagga.start()
        }
      )

      Quagga.onDetected(handleDetect)

      return () => {
        Quagga.offDetected(handleDetect)
        Quagga.stop()
      }
    }
  }, [webcamRef, products, dispatch, setCurrentCart, facingMode, currentCart])

  return (
    <>
      <Webcam ref={webcamRef} audio={false} style={{ width: '100%', display: 'none' }} />
      <audio ref={audioRef} src={barSound} />
    </>
  )
}

export default BarcodeScanner
