import 'package:flutter/material.dart';
import 'agent_assigned_orders.dart';
import 'agent_cashflow.dart';
import '../../widgets/bottom_nav.dart';

class AgentDashboard extends StatefulWidget {
  @override
  _AgentDashboardState createState() => _AgentDashboardState();
}

class _AgentDashboardState extends State<AgentDashboard> {
  int _currentIndex = 0;
  final List<Widget> _screens = [
    AgentAssignedOrders(),
    AgentCashflow(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: BottomNav(
        currentIndex: _currentIndex,
        onTap: (i) => setState(() => _currentIndex = i),
        items: ['Orders', 'Cashflow'],
      ),
    );
  }
}
