'use client'

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react"
import { toast } from "react-toastify";

export function ImageUploader() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [isUploading, startTransition] = useTransition()
    const [imgUrl, setImgUrl] = useState<string>('')

    const handleChooseFile = () => {
        if(!inputRef.current) return;

        inputRef.current.click()
    }

    const handleChange = () => {
        toast.dismiss()

        if(!inputRef.current) {
            setImgUrl('')
            return;
        };

        const fileInput = inputRef.current
        const file = fileInput?.files?.[0]

        if(!file) {
            setImgUrl('')
            return;
        };

        if(file.size > IMAGE_UPLOAD_MAX_SIZE) {
            const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024
            toast.error(`Imagem muito grande. Máx: ${readableMaxSize}kb.`)

            fileInput.value = ''
            setImgUrl('')
            return;
        }

        const formData = new FormData()
        formData.append('file', file)

        startTransition(async () => {
            const result = await uploadImageAction(formData)

            if (result.error) {
                toast.error(result.error)
                fileInput.value = ''
                setImgUrl('')
                return
            }

            setImgUrl(result.url)
            toast.success('Imagem enviada com sucesso!')
        })

        fileInput.value = ''
    }

    return (
        <div className="flex flex-col gap-4 py-4">
            <Button 
              onClick={handleChooseFile} 
              type="button" 
              className="self-start"
              variant="default"
              disabled={isUploading}
            >
                <ImageUpIcon />
                Enviar uma imagem
            </Button>

            {!!imgUrl && (
                <div className="flex flex-col gap-4">
                    <p>
                        <b>URL: </b>{imgUrl}
                    </p>

                    {/* eslint-disable-next-line */}
                    <img src={imgUrl} className="rounded-lg" />
                </div>
            )}

            <input
              onChange={handleChange}
              ref={inputRef}
              className="hidden"
              name="file"
              type="file"
              accept="image/*" 
              disabled={isUploading}
            />
        </div>
    )
}