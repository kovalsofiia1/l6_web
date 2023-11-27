<?php

// get_data.php

// Read the saved data from the file
$savedData = json_decode(file_get_contents("saved_data.json"), true);

// Respond with the retrieved data
echo json_encode($savedData);

?>