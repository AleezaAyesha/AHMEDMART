class Order {
  final String id;
  final String status;
  final String product;
  final double amount;
  final String customerName;

  Order({required this.id, required this.status, required this.product, required this.amount, required this.customerName});

  factory Order.fromJson(Map<String, dynamic> json) {
    return Order(
      id: json['id'],
      status: json['status'],
      product: json['product'],
      amount: json['amount'],
      customerName: json['customerName'],
    );
  }
}
