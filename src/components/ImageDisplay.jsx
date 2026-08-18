import { useState, useRef } from 'react';

const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    auto: 'aspect-auto',
};

// full strings required so Tailwind's scanner detects these classes
const gridColClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
};

function ImageSlot({ src, alt, aspectRatio }) {
    const aspect = aspectClasses[aspectRatio] ?? 'aspect-video';
    return (
        <div className={`${aspect} bg-gray-100 overflow-hidden rounded`}>
            {src ? (
                <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            )}
        </div>
    );
}

function Carousel({ images, alt, aspectRatio }) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef(null);
    const count = images.length;

    const goPrev = () => setIndex(i => (i - 1 + count) % count);
    const goNext = () => setIndex(i => (i + 1) % count);

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
        touchStartX.current = null;
    };

    return (
        <div className="relative select-none">
            <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <ImageSlot src={images[index]} alt={`${alt} — image ${index + 1} of ${count}`} aspectRatio={aspectRatio} />
            </div>
            {count > 1 && (
                <>
                    <button
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl leading-none"
                        aria-label="Previous image"
                    >‹</button>
                    <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl leading-none"
                        aria-label="Next image"
                    >›</button>
                    <div className="flex justify-center gap-1.5 mt-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-gray-600' : 'bg-gray-300'}`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function Grid({ images, alt, aspectRatio, cols }) {
    const colClass = gridColClasses[cols] ?? 'grid-cols-3';
    return (
        <div className={`grid ${colClass} gap-2`}>
            {images.map((src, i) => (
                <ImageSlot key={i} src={src} alt={`${alt} ${i + 1}`} aspectRatio={aspectRatio} />
            ))}
        </div>
    );
}

/**
 * Reusable image display component.
 * @param {string[]} images - Array of image URLs (null entries render a placeholder).
 * @param {'carousel'|'single'|'grid'} mode
 * @param {string} alt - Base alt text; carousel/grid appends the image index.
 * @param {'video'|'square'|'auto'} aspectRatio
 * @param {number} cols - Grid mode: number of columns (1–4).
 * @param {string} className - Applied to the outer wrapper for sizing/layout from parent.
 */
function ImageDisplay({ images = [], mode = 'carousel', alt = '', aspectRatio = 'video', cols = 3, className = '' }) {
    const safeImages = images.length > 0 ? images : [null];
    return (
        <div className={className}>
            {mode === 'carousel' && <Carousel images={safeImages} alt={alt} aspectRatio={aspectRatio} />}
            {mode === 'single'   && <ImageSlot src={safeImages[0]} alt={alt} aspectRatio={aspectRatio} />}
            {mode === 'grid'     && <Grid images={safeImages} alt={alt} aspectRatio={aspectRatio} cols={cols} />}
        </div>
    );
}

export default ImageDisplay;
