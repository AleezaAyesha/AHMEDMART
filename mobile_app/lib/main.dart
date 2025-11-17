import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'core/app_routes.dart';
import 'core/theme.dart';
import 'providers/auth_provider.dart';
import 'providers/customer_provider.dart';
import 'providers/vendor_provider.dart';
import 'providers/agent_provider.dart';
import 'providers/order_provider.dart';

void main() {
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => AuthProvider()),
      ChangeNotifierProvider(create: (_) => CustomerProvider()),
      ChangeNotifierProvider(create: (_) => VendorProvider()),
      ChangeNotifierProvider(create: (_) => AgentProvider()),
      ChangeNotifierProvider(create: (_) => OrderProvider()),
    ],
    child: AhmedMartApp(),
  ));
}

class AhmedMartApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: themeData,
      initialRoute: AppRoutes.splash,
      routes: AppRoutes.routes,
    );
  }
}
