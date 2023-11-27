
<?php
// save_data.php

// Get the data from the POST request
$dataToSave = json_decode(file_get_contents("php://input"), true);

if (!empty($dataToSave)) {
    // Save the data to a file (you might want to use a database in a real-world scenario)
    file_put_contents("saved_data.json", json_encode($dataToSave));

    // Respond with a success message
    echo json_encode(['status' => 'success']);
} else {
    // Respond with an error message
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'No data received']);
}
?>
