<?php
require_once 'config.php';

$email = $_POST['email'];

$sql = "SELECT id FROM users WHERE email = ?";

if ($stmt = mysqli_prepare($conn, $sql)) {
    mysqli_stmt_bind_param($stmt, "s", $email);
    if (mysqli_stmt_execute($stmt)) {
        mysqli_stmt_store_result($stmt);
        if (mysqli_stmt_num_rows($stmt) == 1) {
            // Generate reset token
            $token = bin2hex(random_bytes(50));
            // Store token in database or send email with reset link
            // Here, we'll just return the token for simplicity
            echo "Reset token: " . $token;
        } else {
            echo "No account found with that email";
        }
    } else {
        echo "Error: Could not execute the query: " . mysqli_error($conn);
    }
} else {
    echo "Error: Could not prepare the query: " . mysqli_error($conn);
}
mysqli_stmt_close($stmt);
mysqli_close($conn);
?>

