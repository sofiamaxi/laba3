<?php

    echo "Testing database PDO connection...<br>";

    $connenv = getenv("SQLAZURECONNSTR_defaultConnection");
    parse_str(str_replace(";", "&", $connenv), $connarray);

    $  $connstring = "mysql:host=eu-cdbr-azure-north-e.cloudapp.net;dbname=MariaData;charset=utf8','bccdfe86c6dc86','e416cfe8";
      $user = "ba5562732328d8";
      $pass = "56301ee5";

    try
    {
      conn = new PDO('mysql:host=eu-cdbr-azure-north-e.cloudapp.net;dbname=MariaData;charset=utf8','bccdfe86c6dc86','e416cfe8',

        //printCollations($conn);

        $sqlinsert = "insert into DemoTable (email, sessionid) values (?, ?)";
        $insertquery = $conn->prepare($sqlinsert);

        // test set of usertable
        $myusers = array(
            array("admin@server.com", "session1"),
            array("user1@server.com", "session2"),
            array("user2@server.com", "session3") );

        foreach($myusers as $user)
        {
            $insertquery->execute(array($user[0], $user[1]));

            echo "Insert error code = ".$insertquery->errorCode()." "; // Five zeros are good like this 00000 but HY001 is a common error
            echo "Number of rows inserted = ".$insertquery->rowCount()."<br>";
        }

        print "<br>Selecting rows from the table...<br>";

        $sqlselect = "SELECT email, sessionid FROM DemoTable";
        foreach ($conn->query($sqlselect) as $row)
        {
            print   htmlspecialchars($row['email'])." ".
                    htmlspecialchars($row['sessionid'])."<br>";
        }
    }
    catch ( PDOException $e )
    {
        echo "Some PDO Error occured...";

        // TODO: There is a security problem here. Do not do this in production!!!
        print( "PDO Error : " );
        die(print_r($e));
    }

?>
