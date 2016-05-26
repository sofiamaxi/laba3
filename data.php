<?php
    //phpinfo();

    echo "Testing database PDO connection...<br>";

    $connstring = "Database=SofiaData;Data Source=eu-cdbr-azure-north-e.cloudapp.net;User Id=b7579d5f362235;Password=7eb19a36";
    $user = "b7579d5f362235";
    $pass = "7eb19a36";

    // створення з’єднання з БД
print("1.Connecting to database<br>");
//$conn = new PDO( $connstring, $user, $pass );

try {
$conn = new PDO('mysql:host=eu-cdbr-azure-north-e.cloudapp.net;User Id=b7579d5f362235;dbname=SofiaData;charset=utf8','b7579d5f362235','7eb19a36',
array(PDO::ATTR_EMULATE_PREPARES => false));
} catch (PDOException $e) {
 exit('error: '.$e->getMessage());
}

print("2.DB was connected!<br>");
// встановлення режиму опрацювання помилок на основі виняткових ситуацій

$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
print("3.Creating sql string<br>");
// приклад запиту для створення таблиці

 $sqlcreate ="CREATE TABLE IF NOT exists users( ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,".

                 "login         VARCHAR( 250 ) NOT NULL,".

                 "password      VARCHAR( 128 ) NOT NULL,".

                 "admin         BIT);";

print("4.Sending sql string<br>");

try { $conn->exec($sqlcreate); } catch ( PDOException $e ) { echo "Create table error. Maybe it exists."; }

print("The table was created.<br>");

?>
