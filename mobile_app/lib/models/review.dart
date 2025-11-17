class Review {
  final String id;
  final String userName;
  final String comment;
  final double rating;

  Review({required this.id, required this.userName, required this.comment, required this.rating});

  factory Review.fromJson(Map<String, dynamic> json) {
    return Review(
      id: json['id'],
      userName: json['userName'],
      comment: json['comment'],
      rating: json['rating'],
    );
  }
}
