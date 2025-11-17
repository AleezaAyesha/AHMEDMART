import 'package:flutter/material.dart';

class AgentCashflow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Total Earned: \$1500', style: TextStyle(fontSize: 20)),
          SizedBox(height: 10),
          Text('Pending: \$200', style: TextStyle(fontSize: 18, color: Colors.red)),
        ],
      ),
    );
  }
}
