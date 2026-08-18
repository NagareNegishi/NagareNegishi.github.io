import SectionCard from './SectionCard';
import SectionHeading from './SectionHeading';
import ProductCard from './ProductCard';
import { products } from '../data/products';

function ProductSection() {
    return (
        <section id="products" className="py-8 md:py-12">
            <SectionCard>
                <SectionHeading>Products</SectionHeading>
                <div className="flex flex-col gap-10">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </SectionCard>
        </section>
    );
}

export default ProductSection;
