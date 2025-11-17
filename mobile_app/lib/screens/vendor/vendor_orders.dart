import 'package:flutter/material.dart';
import '../../widgets/order_tile.dart';

class VendorOrders extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10, // Replace with provider data
      itemBuilder: (_, i) => OrderTile(
        orderId: 'ORD${i+1}',
        status: i % 2 == 0 ? 'Pending' : 'Completed',
        onTap: () {},
      ),
    );
  }
}
