import 'package:flutter/material.dart';
import '../../models/order.dart';

class AgentOrderDetails extends StatelessWidget {
  final Order order;
  const AgentOrderDetails({required this.order, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Order Details")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Product: ${order.product}", style: TextStyle(fontSize: 18)),
            Text("Customer: ${order.customerName}", style: TextStyle(fontSize: 18)),
            Text("Amount: \$${order.amount}", style: TextStyle(fontSize: 18)),
            Text("Status: ${order.status}", style: TextStyle(fontSize: 18)),
          ],
        ),
      ),
    );
  }
}
