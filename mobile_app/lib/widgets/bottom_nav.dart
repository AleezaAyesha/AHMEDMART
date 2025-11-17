import 'package:flutter/material.dart';

class BottomNav extends StatelessWidget {
  final int currentIndex;
  final Function(int) onTap;
  final List<String> items;

  BottomNav({required this.currentIndex, required this.onTap, required this.items});

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: currentIndex,
      onTap: onTap,
      items: items.map((i) => BottomNavigationBarItem(icon: Icon(Icons.circle), label: i)).toList(),
    );
  }
}
