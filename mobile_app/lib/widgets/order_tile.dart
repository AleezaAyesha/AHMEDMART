import 'package:flutter/material.dart';

class OrderTile extends StatelessWidget {
  final String orderId;
  final String status;
  final VoidCallback onTap;

  OrderTile({required this.orderId, required this.status, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 5, horizontal: 10),
      child: ListTile(
        title: Text(orderId),
        subtitle: Text(status),
        trailing: Icon(Icons.arrow_forward_ios, size: 16),
        onTap: onTap,
      ),
    );
  }
}
