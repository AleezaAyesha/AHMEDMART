import 'package:flutter/material.dart';
import 'vendor_orders.dart';
import 'vendor_products.dart';
import '../../widgets/bottom_nav.dart';

class VendorDashboard extends StatefulWidget {
  @override
  _VendorDashboardState createState() => _VendorDashboardState();
}

class _VendorDashboardState extends State<VendorDashboard> {
  int _currentIndex = 0;
  final List<Widget> _screens = [
    VendorOrders(),
    VendorProducts(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNav(
        currentIndex: _currentIndex,
        onTap: (i) => setState(() => _currentIndex = i),
        items: ['Orders', 'Products'],
      ),
    );
  }
}
