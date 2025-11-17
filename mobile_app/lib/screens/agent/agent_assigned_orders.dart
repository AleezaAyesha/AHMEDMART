import 'package:flutter/material.dart';
import '../../widgets/order_tile.dart';

class AgentAssignedOrders extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 5,
      itemBuilder: (_, i) => OrderTile(
        orderId: 'ORD${i+1}',
        status: 'Assigned',
        onTap: () {},
      ),
    );
  }
}
