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
/**
 * PHP GeoJSON Constructor, adpated from https://github.com/bmcbride/PHP-Database-GeoJSON
 */

# Connect to MySQL database
$conn = new PDO('mysql:host=127.0.0.1;dbname=webgis','vatiady','rahasiasaya23');

# However the User's Query will be passed to the DB:
$sql = 'SELECT * from administrasikecamatan_ar_50k';

# Try query or error
$rs = $conn->query($sql);
if (!$rs) {
    echo 'An SQL error occured.\n';
    exit;
}

# Build GeoJSON feature collection array
$geojson = array(
   'type'      => 'FeatureCollection',
   'features'  => array()
);

# Loop through rows to build feature arrays
while($row = mysqli_fetch_assoc($dbquery)) {
    $feature = array(
        'id' => $row['partnership_id'],
        'type' => 'Feature', 
        'geometry' => array(
            'type' => 'Point',
            # Pass Longitude and Latitude Columns here
            'coordinates' => array($row['longitude'], $row['latitude'])
        ),
        # Pass other attribute columns here
        'properties' => array(
            'name' => $row['Name'],
            'description' => $row['Description'],
            'sector' => $row['Sector'],
            'country' => $row['Country'],
            'status' => $row['Status'],
            'start_date' => $row['Start Date'],
            'end_date' => $row['End Date'],
            'total_invest' => $row['Total Lifetime Investment'],
            'usg_invest' => $row['USG Investment'],
            'non_usg_invest' => $row['Non-USG Investment']
            )
        );
    # Add feature arrays to feature collection array
    array_push($geojson['features'], $feature);
}

header('Content-type: application/json');
echo json_encode($geojson, JSON_NUMERIC_CHECK);
$conn = NULL;
?>


</body>
</html>