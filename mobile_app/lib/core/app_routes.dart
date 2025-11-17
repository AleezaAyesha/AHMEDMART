import 'package:flutter/material.dart';
import '../screens/auth/splash_screen.dart';
import '../screens/auth/login_screen.dart';
import '../screens/auth/register_screen.dart';
import '../screens/customer/customer_dashboard.dart';
import '../screens/vendor/vendor_dashboard.dart';
import '../screens/agent/agent_dashboard.dart';

class AppRoutes {
  static const splash = '/';
  static const login = '/login';
  static const register = '/register';
  static const customerDashboard = '/customer';
  static const vendorDashboard = '/vendor';
  static const agentDashboard = '/agent';

  static Map<String, WidgetBuilder> routes = {
    splash: (_) => SplashScreen(),
    login: (_) => LoginScreen(),
    register: (_) => RegisterScreen(),
    customerDashboard: (_) => CustomerDashboard(),
    vendorDashboard: (_) => VendorDashboard(),
    agentDashboard: (_) => AgentDashboard(),
  };
}
