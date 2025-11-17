import 'package:flutter/material.dart';
import '../../widgets/product_card.dart';

class VendorProducts extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      padding: EdgeInsets.all(10),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 10,
        crossAxisSpacing: 10,
      ),
      itemCount: 8, // Replace with provider data
      itemBuilder: (_, i) => ProductCard(
        name: 'Vendor Product $i',
        imageUrl: 'https://via.placeholder.com/150',
        price: 20.0 + i,
        onTap: () {},
      ),
    );
  }
}
