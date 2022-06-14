import { urdu } from './urdu'
import { english } from './english'

export const get_text = (lang, key) => {
    if (lang === 'ur') {
        return urdu[key]
    } else {
        return english[key]
    }
}