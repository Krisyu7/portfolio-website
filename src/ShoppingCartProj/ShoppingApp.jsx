import React, { useState, useEffect } from 'react';

// 商品卡片组件
function ItemCard(props) {
    const { name, price, description, image, onAddToCart } = props;

    const handleAddToCart = () => {
        const quantity = parseInt(document.getElementById(`quantity-${name}`).value) || 1;
        if (onAddToCart) {
            onAddToCart({ name, price, quantity });
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-2 max-w-sm">
            {image && (
                <div className="mb-4">
                    <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
                </div>
            )}

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-xl font-bold text-red-600 mb-2">¥{price}</p>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <label htmlFor={`quantity-${name}`} className="text-sm text-gray-700 mr-2">数量:</label>
                    <input
                        type="number"
                        id={`quantity-${name}`}
                        min="1"
                        max="99"
                        defaultValue="1"
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    onClick={handleAddToCart}
                >
                    加入购物车
                </button>
            </div>
        </div>
    );
}

// 购物车组件
function ShoppingCart({ cartItems, onRemoveItem, onUpdateQuantity }) {
    // 方法1: 通过计算属性实时计算总计
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">购物车</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">购物车是空的</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b">
                            <div>
                                <span className="font-medium">{item.name}</span>
                                <span className="text-sm text-gray-500 ml-2">x{item.quantity}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-red-600 font-bold mr-4">
                                    ¥{(item.price * item.quantity).toFixed(2)}
                                </span>
                                <button
                                    onClick={() => onRemoveItem(index)}
                                    className="text-red-500 hover:text-red-700 text-sm"
                                >
                                    删除
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* 总计显示区域 */}
                    <div className="mt-4 pt-4 border-t-2 border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg">商品数量:</span>
                            <span className="text-lg font-medium">{itemCount} 件</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">总计:</span>
                            <span className="text-2xl font-bold text-red-600">¥{total.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg mt-4 text-lg font-bold">
                            结算 (¥{total.toFixed(2)})
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

// 主应用组件
function ShoppingApp() {
    const [products] = useState([
        {
            id: 1,
            name: "苹果 iPhone 15",
            price: 5999,
            description: "最新款iPhone，配备A17芯片",
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "华为 MatePad",
            price: 2999,
            description: "高性能平板电脑",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "小米智能手环",
            price: 199,
            description: "健康监测，运动记录",
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop"
        }
    ]);

    // 方法2: 在state中存储购物车项目，总计通过计算得出
    const [cartItems, setCartItems] = useState([]);

    // 方法3: 如果需要，也可以单独存储总计值
    const [totalAmount, setTotalAmount] = useState(0);

    // 当购物车变化时，更新总计
    useEffect(() => {
        const newTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotalAmount(newTotal);
    }, [cartItems]);

    const handleAddToCart = (newItem) => {
        setCartItems(prevCart => {
            // 检查是否已存在相同商品
            const existingItemIndex = prevCart.findIndex(item => item.name === newItem.name);

            if (existingItemIndex >= 0) {
                // 如果商品已存在，增加数量
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += newItem.quantity;
                return updatedCart;
            } else {
                // 如果是新商品，直接添加
                return [...prevCart, newItem];
            }
        });
    };

    const handleRemoveItem = (index) => {
        setCartItems(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const handleUpdateQuantity = (index, newQuantity) => {
        setCartItems(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity = newQuantity;
            return updatedCart;
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">购物网站</h1>

                {/* 购物车组件 */}
                <ShoppingCart
                    cartItems={cartItems}
                    onRemoveItem={handleRemoveItem}
                    onUpdateQuantity={handleUpdateQuantity}
                />

                {/* 商品列表 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ItemCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>

                {/* 显示当前总计信息 */}
                <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                    <p className="font-bold">购物车总计: ¥{totalAmount.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default ShoppingApp;