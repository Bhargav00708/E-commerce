const Order = require('./sql/Order');
const OrderItem = require('./sql/OrderItem');

Order.hasMany(OrderItem, { foreignKey: 'orderId', as: 'items' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

module.exports = {
    Order,
    OrderItem,
}