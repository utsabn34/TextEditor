<?php 
$fileName="TextEditor.txt";
if(isset($_POST['action']))
{
    switch($_POST['action'])
    {
    case 'read';
        echo file_get_contents($fileName);
    break;

    case 'write';
        if( isset($_POST['data']))
        {
            $myfile = fopen($fileName, "w") or die("Unable to open file!");
            $txt = $_POST['data'];
            fwrite($myfile, $txt);
            fclose($myfile);
            echo "file successfully saved";
        }
    break;
    }

}

?>
