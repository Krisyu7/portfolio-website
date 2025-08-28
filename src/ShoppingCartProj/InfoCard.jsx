// InfoCard.jsx
function InfoCard({ data, cartItems = [], onRemoveItem, onUpdateQuantity }) {
    const isEmpty = !Object.values(data).some(value => value.trim());

    const getTaxRate = (province) => {
        const taxRates = {
            'Alberta': 0.05,
            'British Columbia': 0.12,
            'Manitoba': 0.12,
            'New Brunswick': 0.15,
            'Newfoundland and Labrador': 0.15,
            'Nova Scotia': 0.15,
            'Ontario': 0.13,
            'Prince Edward Island': 0.15,
            'Quebec': 0.14975,
            'Saskatchewan': 0.11,
            'Northwest Territories': 0.05,
            'Nunavut': 0.05,
            'Yukon': 0.05
        };
        return taxRates[province] || 0;
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxRate = getTaxRate(data.province);
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;

    return (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-lg p-3 h-full overflow-y-auto">
            <div className="flex items-center mb-2">
                <div className="bg-green-500 rounded-full p-1 mr-2">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-sm font-bold text-gray-800">Order Summary</h2>
            </div>

            {/* Cart Items */}
            {cartItems.length > 0 && (
                <div className="mb-3">
                    <h3 className="text-xs font-medium text-gray-700 mb-1">Items in Cart</h3>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                        {cartItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                        <div className="flex items-center mt-1 space-x-2">
                                            <div className="flex items-center border rounded text-xs">
                                                <button 
                                                    onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                                >
                                                    −
                                                </button>
                                                <span className="px-2 py-1 border-x">{item.quantity}</span>
                                                <button 
                                                    onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => onRemoveItem(index)}
                                                className="text-red-500 hover:text-red-700 text-xs"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right ml-2">
                                        <p className="text-sm font-bold text-gray-900">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            ${item.price} each
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isEmpty ? (
                <div className="text-center py-8">
                    <div className="text-4xl mb-3">📝</div>
                    <p className="text-gray-500">Fill out the form to see your order details</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Personal Information */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-700">Shipping Information</h3>
                        
                        {data.name && (
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg">👤</span>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</p>
                                        <p className="text-sm font-semibold text-gray-900">{data.name}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {data.email && (
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg">📧</span>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</p>
                                        <p className="text-sm font-semibold text-gray-900 break-all">{data.email}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {(data.address || data.city || data.province) && (
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg">📍</span>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Address</p>
                                        <div className="text-sm font-semibold text-gray-900">
                                            {data.address && <p>{data.address}</p>}
                                            {(data.city || data.province) && (
                                                <p>{data.city}{data.city && data.province && ', '}{data.province}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {data.payment && (
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg">💳</span>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Payment</p>
                                        <p className="text-sm font-semibold text-gray-900">{data.payment}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Order Total - Always at bottom */}
            {cartItems.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-300">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span>Tax ({data.province ? `${(taxRate * 100).toFixed(1)}%` : 'Select province'}):</span>
                                <span>${taxAmount.toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-1">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>Total:</span>
                                    <span className="text-blue-600">${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        
                        <button 
                            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-semibold text-sm"
                            disabled={!data.name || !data.email || !data.address || !data.province}
                        >
                            {!data.name || !data.email || !data.address || !data.province 
                                ? 'Complete Information Required' 
                                : `Place Order - $${total.toFixed(2)}`
                            }
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InfoCard;