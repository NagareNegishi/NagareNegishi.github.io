import { useState, useRef, useEffect, useCallback } from 'react';

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

function Lightbox({ src, alt, onClose, onPrev, onNext, count }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, onPrev, onNext]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center"
            onClick={onClose}
        >
            <button
                className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-gray-300 transition-colors"
                onClick={onClose}
                aria-label="Close lightbox"
            >×</button>
            <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                {count > 1 && (
                    <button
                        className="bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl leading-none transition-colors"
                        onClick={onPrev}
                        aria-label="Previous image"
                    >‹</button>
                )}
                <img
                    src={src}
                    alt={alt}
                    className="max-w-[80vw] max-h-[90vh] object-contain"
                />
                {count > 1 && (
                    <button
                        className="bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl leading-none transition-colors"
                        onClick={onNext}
                        aria-label="Next image"
                    >›</button>
                )}
            </div>
        </div>
    );
}

function Carousel({ images, alt, aspectRatio }) {
    const [index, setIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const touchStartX = useRef(null);
    const closeLight = useCallback(() => setLightboxOpen(false), []);
    const count = images.length;

    const goTo = (newIndex) => {
        setFading(true);
        setTimeout(() => {
            setIndex(newIndex);
            setFading(false);
        }, 250);
    };

    const goPrev = () => goTo((index - 1 + count) % count);
    const goNext = () => goTo((index + 1) % count);

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
        touchStartX.current = null;
    };

    return (
        <div className="select-none">
            <div className="flex items-center gap-2">
                {count > 1 && (
                    <button
                        onClick={goPrev}
                        className="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-xl leading-none transition-colors"
                        aria-label="Previous image"
                    >‹</button>
                )}
                <div
                    className={`flex-1 transition-opacity duration-[250ms] ${fading ? 'opacity-0' : 'opacity-100'}`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className={images[index] ? 'cursor-zoom-in' : ''}
                        onClick={() => images[index] && setLightboxOpen(true)}
                    >
                        <ImageSlot src={images[index]} alt={`${alt} — image ${index + 1} of ${count}`} aspectRatio={aspectRatio} />
                    </div>
                </div>
                {count > 1 && (
                    <button
                        onClick={goNext}
                        className="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-xl leading-none transition-colors"
                        aria-label="Next image"
                    >›</button>
                )}
            </div>
            {count > 1 && (
                <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs text-gray-400">{index + 1} / {count}</span>
                    <div className="flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-gray-600' : 'bg-gray-300'}`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
            {lightboxOpen && (
                <Lightbox
                    src={images[index]}
                    alt={`${alt} — image ${index + 1} of ${count}`}
                    onClose={closeLight}
                    onPrev={goPrev}
                    onNext={goNext}
                    count={count}
                />
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
