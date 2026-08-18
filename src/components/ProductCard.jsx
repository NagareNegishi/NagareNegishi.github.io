import ImageDisplay from './ImageDisplay';
import IconLink from './IconLink';
import Tag from './Tag';

function ProductCard({ product }) {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-[45%]">
                <ImageDisplay
                    images={product.images}
                    mode="carousel"
                    alt={product.title}
                    aspectRatio="video"
                />
            </div>
            <div className="md:w-[55%] flex flex-col gap-3">
                <h3 className="text-2xl">{product.title}</h3>
                <p className="text-[#666]">{product.description}</p>
                <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <div>
                    {product.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
                </div>
                <div className="flex gap-4 mt-auto">
                    {product.links.demo && (
                        <IconLink href={product.links.demo} label={product.links.demoLabel} external />
                    )}
                    {product.links.github && (
                        <IconLink href={product.links.github} label="View Code" external />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
