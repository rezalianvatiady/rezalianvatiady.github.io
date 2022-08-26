<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<?php 
$sql = "SELECT * FROM administrasikecamatan_ar_50k";

$server = "localhost";
$username = "vatiady";
$password = "rahasiasaya23";
$db = "webgis";  
$conn = mysqli_connect($server, $username, $password, $db);

$result = mysqli_query($conn, $sql);

$geojson = array('type' => 'FeatureCollection', 'features' => array());

while($row = mysqli_fetch_assoc($result)) {
    $marker = array(
        'type' => 'Feature',
        'features' => array(
            'type' => 'Feature',
            "geometry" => array(
                'type' => 'Polygon',
                'coordinates' => array(
                     $row['longitude'],
                     $row['latitude']
                )
            )
        )
    );
    array_push($geojson['features'], $marker);
}

echo json_encode($geojson); 
?>


</body>
</html>