import 'package:flutter/material.dart';
import 'customer_home.dart';
import 'customer_cart.dart';
import 'customer_order_tracking.dart';
import '../../widgets/bottom_nav.dart';

class CustomerDashboard extends StatefulWidget {
  @override
  _CustomerDashboardState createState() => _CustomerDashboardState();
}

class _CustomerDashboardState extends State<CustomerDashboard> {
  int _currentIndex = 0;
  final List<Widget> _screens = [
    CustomerHome(),
    CustomerCart(),
    CustomerOrderTracking(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNav(
        currentIndex: _currentIndex,
        onTap: (i) => setState(() => _currentIndex = i),
        items: ['Home', 'Cart', 'Orders'],
      ),
    );
  }
}
