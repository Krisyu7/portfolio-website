// UserInfoPage.jsx
import { useState, useEffect } from 'react';
import InfoFillForm from './InfoFillForm';
import InfoCard from "./InfoCard";

function UserInfoPage() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        province: '',
        payment: ''
    });

    const [products] = useState([
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 1299,
            description: "Latest iPhone with titanium design and A17 Pro chip",
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "iPad Air",
            price: 799,
            description: "Powerful tablet with M2 chip for work and creativity",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Apple Watch Series 9",
            price: 399,
            description: "Advanced health monitoring and fitness tracking",
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            name: "AirPods Pro",
            price: 279,
            description: "Premium wireless earbuds with active noise cancellation",
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop"
        }
    ]);

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (newItem) => {
        setCartItems(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.name === newItem.name);
            
            if (existingItemIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += newItem.quantity;
                return updatedCart;
            } else {
                return [...prevCart, newItem];
            }
        });
    };

    const handleRemoveItem = (index) => {
        setCartItems(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const handleUpdateQuantity = (index, newQuantity) => {
        if (newQuantity <= 0) {
            handleRemoveItem(index);
            return;
        }
        setCartItems(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity = newQuantity;
            return updatedCart;
        });
    };

    return (
        <div className="max-w-full mx-auto h-full overflow-hidden flex flex-col">
            {/* Products Section - Full Width */}
            <div className="bg-white rounded-lg shadow-sm border p-3 mb-3">
                <h2 className="text-sm font-bold text-gray-900 mb-2">Select Products</h2>
                <div className="grid grid-cols-4 gap-2">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Section - Form and Info Display */}
            <div className="flex h-full gap-3 overflow-hidden">
                {/* Left - Form Section */}
                <div className="flex-1 overflow-hidden">
                    <InfoFillForm onUpdate={setUserInfo} />
                </div>

                {/* Right - Info Display */}
                <div className="w-72 h-full">
                    <InfoCard 
                        data={userInfo} 
                        cartItems={cartItems}
                        onRemoveItem={handleRemoveItem}
                        onUpdateQuantity={handleUpdateQuantity}
                    />
                </div>
            </div>
        </div>
    );
}

function ProductCard({ product, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        onAddToCart({ 
            name: product.name, 
            price: product.price, 
            quantity: quantity 
        });
        setQuantity(1);
    };

    return (
        <div className="bg-white border rounded-lg p-2 hover:shadow-md transition-shadow">
            <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-16 object-cover rounded-md mb-1"
            />
            <h3 className="font-medium text-gray-900 mb-1 text-xs leading-tight">{product.name}</h3>
            <div className="text-xs font-bold text-blue-600 mb-2">${product.price}</div>
            
            <div className="flex items-center gap-1">
                <div className="flex items-center border rounded text-xs">
                    <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-1 py-0.5 text-gray-600 hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="px-1 py-0.5 border-x">{quantity}</span>
                    <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-1 py-0.5 text-gray-600 hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded hover:bg-blue-700 transition-colors"
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default UserInfoPage;