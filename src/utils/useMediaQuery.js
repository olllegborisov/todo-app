import { useState, useEffect } from 'react'

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() =>
        window.matchMedia(query).matches
    )

    useEffect(() => {
        const media = window.matchMedia(query)
        const onChange = (e) => setMatches(e.matches)

        media.addEventListener('change', onChange)
        return () => media.removeEventListener('change', onChange)
    }, [query])

    return matches
}