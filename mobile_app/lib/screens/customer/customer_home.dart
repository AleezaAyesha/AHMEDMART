import 'package:flutter/material.dart';
import '../../widgets/product_card.dart';

class CustomerHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      padding: EdgeInsets.all(10),
      itemCount: 10, // Replace with provider data
      itemBuilder: (_, i) => ProductCard(
        name: 'Product $i',
        imageUrl: 'https://via.placeholder.com/150',
        price: 10.0 + i,
        onTap: () {},
      ),
    );
  }
}
