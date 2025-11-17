import 'package:flutter/material.dart';
import '../models/user.dart';
import '../services/api_service.dart';

class AuthProvider extends ChangeNotifier {
  User? user;
  bool isLoading = false;

  Future<void> login(String email, String password) async {
    isLoading = true;
    notifyListeners();
    try {
      user = await ApiService.login(email, password);
    } catch (e) {
      rethrow;
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }

  void logout() {
    user = null;
    notifyListeners();
  }
}
