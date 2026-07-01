import fs from 'fs'
import path from 'path'

export interface RodadaImage {
  src: string
  caption: string
}

export function getRodadasImages(): RodadaImage[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'rodadas')

  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir)

  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG']

  return files
    .filter(file => validExtensions.some(ext => file.endsWith(ext)))
    .map(file => {
      const nameWithoutExt = file.replace(/\.[^/.]+$/, '')
      const caption = nameWithoutExt
        .replace(/[-_]/g, ' ')
        .replace(/[0-9]/g, '')
        .replace(/[^a-zA-ZáéíóúñüÁÉÍÓÚÑÜ ,]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
      return {
        src: `/images/rodadas/${file}`,
        caption,
      }
    })
    .sort((a, b) => a.caption.localeCompare(b.caption))
}
