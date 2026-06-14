export function Overlay({ isVisible, onClick }) {
    if (!isVisible) return null

    return (
        <div
            onClick={onClick}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 1000,
            }}
        />
    )
}