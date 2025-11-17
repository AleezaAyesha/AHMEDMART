import 'package:flutter/material.dart';
import '../../models/order.dart';
import 'package:provider/provider.dart';
import '../../providers/vendor_provider.dart';

class VendorOrderDetails extends StatelessWidget {
  final Order order;

  const VendorOrderDetails({Key? key, required this.order}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final vendorProvider = Provider.of<VendorProvider>(context, listen: false);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Order Details'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 0,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Order #${order.id}', style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            Text('Customer: ${order.customerName}'),
            Text('Address: ${order.deliveryAddress}'),
            Text('Status: ${order.status}'),
            Text('Total: \$${order.total.toStringAsFixed(2)}'),
            const SizedBox(height: 20),
            const Text('Actions', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 12),
            Wrap(
              spacing: 12,
              children: [
                ElevatedButton(
                  onPressed: () => vendorProvider.updateOrderStatus(order.id, 'Accepted'),
                  child: const Text('Accept'),
                ),
                ElevatedButton(
                  onPressed: () => vendorProvider.updateOrderStatus(order.id, 'Rejected'),
                  style: ElevatedButton.styleFrom(backgroundColor: Colors.redAccent),
                  child: const Text('Reject'),
                ),
                ElevatedButton(
                  onPressed: () => vendorProvider.assignAgent(order.id),
                  style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
                  child: const Text('Assign Agent'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
