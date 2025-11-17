import 'package:flutter/material.dart';
import '../models/order.dart';
import '../services/api_service.dart';

class OrderProvider extends ChangeNotifier {
  List<Order> orders = [];
  bool isLoading = false;

  Future<void> fetchOrders() async {
    isLoading = true;
    notifyListeners();
    orders = await ApiService.getAllOrders();
    isLoading = false;
    notifyListeners();
  }
}
