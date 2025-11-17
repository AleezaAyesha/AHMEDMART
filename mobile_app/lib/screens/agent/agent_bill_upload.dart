import 'package:flutter/material.dart';
import '../../services/api_service.dart';
import '../../core/helpers.dart';

class AgentBillUpload extends StatefulWidget {
  final String orderId;
  const AgentBillUpload({required this.orderId, Key? key}) : super(key: key);

  @override
  _AgentBillUploadState createState() => _AgentBillUploadState();
}

class _AgentBillUploadState extends State<AgentBillUpload> {
  bool uploading = false;

  Future<void> uploadBill() async {
    setState(() => uploading = true);
    try {
      await ApiService.uploadBill(widget.orderId);
      showSnackBar(context, "Bill uploaded successfully!");
    } catch (e) {
      showSnackBar(context, "Failed to upload bill");
    } finally {
      setState(() => uploading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Upload Bill")),
      body: Center(
        child: ElevatedButton(
          onPressed: uploading ? null : uploadBill,
          child: uploading ? CircularProgressIndicator(color: Colors.white) : Text("Upload Bill"),
        ),
      ),
    );
  }
}
