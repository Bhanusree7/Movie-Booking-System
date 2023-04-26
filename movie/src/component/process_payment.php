 <?php 

// read the payment details from the $_POST superglobal
// $cardNumber = $_POST['card_number'];
// $cardExpiryMonth = $_POST['card_expiry_month'];
// $cardExpiryYear = $_POST['card_expiry_year'];
// $cardCVV = $_POST['card_cvv'];



// process the payment here
// ... (your payment processing code goes here)

// assume the payment was successful for this example
// $paymentSuccessful = true;

// // return a JSON response indicating whether the payment was successful or not
// $response = [
//     'success' => $paymentSuccessful
// ];
// header('Content-Type: application/json');
// echo json_encode($response);

//  -->
<?php 
header("Access-Control-Allow-Origin: *");
$host="localhost";
$user="root";
$password="";
$dbname="movie";

$con=mysqli_connect($host,$user,$password,$dbname);
if(!$con){
    die("Connection failed: ".mysqli_connect_error());

}

switch($method){
    case 'GET':
    $sql="select* from payment";
    break;
}
$result=msqli_query($con,$sql);
if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
}
if($method=='GET'){
    if(!$id) echo '[';
    for($i=0;$i<mysqli_num_rows($result);$i++){
        echo($i>0?':').json_encode(mysqli_fetch_objects($result));
    }
    if (!$id) echo ']';
   }else {
    echo mysqli_affected_rows($con);
}


$con->close();