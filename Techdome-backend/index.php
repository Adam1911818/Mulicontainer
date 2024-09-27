<?php
// Database connection parameters
$servername = getenv('DB_HOST'); // Use environment variables for Docker
$username = getenv('DB_USER'); // Replace with your MySQL username
$password = getenv('DB_PASSWORD'); // Replace with your MySQL password
$dbname = getenv('DB_NAME'); // Replace with the name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // Connection failed, output error details
    die("Connection failed: " . $conn->connect_error . " - " . $conn->connect_errno);
}

// SQL query to get table structure
$sql = "SHOW TABLES";
$result = $conn->query($sql);

if ($result) {
    echo "<h1>Database Structure</h1>";
    echo "<table border='1'><tr><th>Tables</th></tr>";

    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["Tables_in_$dbname"] . "</td></tr>";
    }
    echo "</table>";
} else {
    // Query failed, output error details
    echo "Error executing query: " . $conn->error;
}

// Close the connection
$conn->close();
?>
