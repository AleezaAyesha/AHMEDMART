import 'package:flutter/material.dart';
import '../../widgets/order_tile.dart';

class CustomerOrderTracking extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      padding: EdgeInsets.all(10),
      itemCount: 5,
      itemBuilder: (_, i) => OrderTile(
        orderId: 'ORD$i',
        status: 'Delivered',
        onTap: () {},
      ),
    );
  }
}
