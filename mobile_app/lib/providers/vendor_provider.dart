import 'package:flutter/material.dart';
import '../models/order.dart';
import '../models/product.dart';
import '../services/api_service.dart';

class VendorProvider extends ChangeNotifier {
  List<Order> orders = [];
  List<Product> products = [];
  bool isLoading = false;

  Future<void> fetchOrders() async {
    isLoading = true;
    notifyListeners();
    orders = await ApiService.getVendorOrders();
    isLoading = false;
    notifyListeners();
  }

  Future<void> fetchProducts() async {
    isLoading = true;
    notifyListeners();
    products = await ApiService.getVendorProducts();
    isLoading = false;
    notifyListeners();
  }

  Future<void> addOrUpdateProduct(Product product) async {
    await ApiService.addOrUpdateProduct(product);
    await fetchProducts();
  }
}
