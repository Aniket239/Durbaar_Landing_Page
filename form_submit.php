<?php
    echo '<pre>';
print_r($_REQUEST);
echo '</pre>';
    $name = $_REQUEST["name"];
    $email = $_REQUEST["email"];
    $contact = $_REQUEST["mobile"];
    $project = "Durbaar Banquets";
    $utm_source = $_REQUEST["utm_source"];
    $utm_medium = $_REQUEST["utm_medium"];
    $utm_content = $_REQUEST["utm_content"];
    $utm_term = $_REQUEST["utm_term"];
    $network = $_REQUEST["network"];
    $campaign_id = $_REQUEST["campaign_id"];
    $adgroup_id = $_REQUEST["adgroup_id"];
    $gclid = $_REQUEST["gclid"];
    $device = $_REQUEST["device"];
    $creative = $_REQUEST["creative"];
    $placement = $_REQUEST["placement"];
    $extension_id = $_REQUEST["extension_id"];
    $target_id = $_REQUEST["target_id"];
    $loc_interest_ms = $_REQUEST["loc_interest_ms"];
    $loc_physical_ms = $_REQUEST["loc_physical_ms"];
    $device_model = $_REQUEST["device_model"];
    $keyword = $_REQUEST["keyword"];
    $match_type = $_REQUEST["match_type"];
    $adposition = $_REQUEST["adposition"];
    $source_id = $_REQUEST["source_id"];
    $target = $_REQUEST["target"];
    
    $apikey = "kG6vgYgUqEmnHUtHX15pNQ";
    $url = 'https://www.realtybucket.com/webhook/website_form_data';
    $myvars = 'apikey=' . $apikey . '&name=' . $name . '&email=' . $email . '&contact=' . $contact . '&project=' . $project . '&utm_form_name=' . $utm_form_name . '&utm_source=' . $utm_source . '&utm_medium=' . $utm_medium . '&utm_content=' . $utm_content . '&utm_term=' . $utm_term . '&network=' . $network . '&campaign_id=' . $campaign_id . '&adgroup_id=' . $adgroup_id . '&gclid=' . $gclid . '&device=' . $device . '&creative=' . $creative. '&placement=' . $placement . '&extension_id=' . $extension_id . '&target_id=' . $target_id . '&loc_interest_ms=' . $loc_interest_ms . '&loc_physical_ms=' . $loc_physical_ms . '&device_model=' . $device_model . '&keyword=' . $keyword . '&match_type=' . $match_type . '&adposition=' . $adposition . '&source_id=' . $source_id . '&target=' . $target;
    $ch = curl_init( $url );
    curl_setopt( $ch, CURLOPT_POST, 1);
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt( $ch, CURLOPT_HEADER, 0);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec( $ch );
    header("Location:http://durbaarbanquets.com/thankyou.html?name=" . $name . "&email=" . $email . "&mobile=" . $contact);
?>