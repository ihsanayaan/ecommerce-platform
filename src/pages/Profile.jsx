const Profile = () => {
  const { user } = useSelector(state => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user orders from API
    const fetchOrders = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        const userOrders = await getUserOrders(user.uid);
        setOrders(userOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-3"></div>
                <h2 className="text-xl font-semibold">{user.displayName || 'User'}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
              
              <nav className="space-y-2">
                <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
                  My Orders
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
                  Account Settings
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
                  Address Book
                </button>
                <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
                  Payment Methods
                </button>
              </nav>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="border rounded-lg p-4 hover:shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Order #{order.id}</h3>
                        <p className="text-gray-600 text-sm">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{order.items[0].name}</h4>
                        <p className="text-gray-600 text-sm">
                          {order.items.length} item{order.items.length > 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${order.total.toFixed(2)}</p>
                        <button className="text-primary hover:underline text-sm mt-1">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">You haven't placed any orders yet.</p>
                <Link to="/products" className="text-primary hover:underline mt-2 inline-block">
                  Start Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};