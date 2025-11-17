import 'package:flutter/material.dart';
import '../models/order.dart';
import '../services/api_service.dart';

class AgentProvider extends ChangeNotifier {
  List<Order> assignedOrders = [];
  bool isLoading = false;

  Future<void> fetchAssignedOrders() async {
    isLoading = true;
    notifyListeners();
    assignedOrders = await ApiService.getAgentOrders();
    isLoading = false;
    notifyListeners();
  }

  Future<void> acceptOrRejectOrder(String orderId, bool accept) async {
    await ApiService.acceptOrRejectOrder(orderId, accept);
    await fetchAssignedOrders();
  }
}
