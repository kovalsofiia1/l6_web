<?php

$savedData = json_decode(file_get_contents("saved_data.json"), true);
echo json_encode($savedData);

?>