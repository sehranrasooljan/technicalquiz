<?php
require_once "config.php";

$username = $password = $confirm_password = "";
$username_err = $password_err = $confirm_password_err = "";

if ($_SERVER['REQUEST_METHOD'] == "POST"){

    // Check if username is empty
    if(empty(trim($_POST["username"]))){
        $username_err = "Username cannot be blank";
    }
    else{
        $sql = "SELECT id FROM users WHERE username = ?";
        $stmt = mysqli_prepare($conn, $sql);
        if($stmt)
        {
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            // Set the value of param username
            $param_username = trim($_POST['username']);

            // Try to execute this statement
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1)
                {
                    $username_err = "This username is already taken"; 
                }
                else{
                    $username = trim($_POST['username']);
                }
            }
            else{
                echo "Something went wrong";
            }
        }
    }

    mysqli_stmt_close($stmt);


// Check for password
if(empty(trim($_POST['password']))){
    $password_err = "Password cannot be blank";
}
elseif(strlen(trim($_POST['password'])) < 5){
    $password_err = "Password cannot be less than 5 characters";
}
else{
    $password = trim($_POST['password']);
}

// Check for confirm password field
if(trim($_POST['password']) !=  trim($_POST['confirm_password'])){
    $password_err = "Passwords should match";
}


// If there were no errors, go ahead and insert into the database
if(empty($username_err) && empty($password_err) && empty($confirm_password_err))
{
    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    $stmt = mysqli_prepare($conn, $sql);
    if ($stmt)
    {
        mysqli_stmt_bind_param($stmt, "ss", $param_username, $param_password);

        // Set these parameters
        $param_username = $username;
        $param_password = password_hash($password, PASSWORD_DEFAULT);

        // Try to execute the query
        if (mysqli_stmt_execute($stmt))
        {
            header("location: login.php");
        }
        else{
            echo "Something went wrong... cannot redirect!";
        }
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-C ompatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>SignUp</title>
	<link rel="stylesheet" href="style3.css">

</head>
<body>
	<div class="wrapper">
		<nav class="navbar">
			<a href="#" class="logo">Techinal Quiz</a>
			<ul>
				<li><a class="active" href="index.html">Home</a></li>
				<li><a href="loginquiz.html">Login</a></li>
				<li><a class="active" href="signup.html">SignUp</a></li>
				<li><a href="feedback.html">Feedback</a></li>
				<li><a href="#">About</a></li>
			</ul>

		</nav>
        <form name="rform">
        <div class="newuser">
            <div class="inner_div">
        Enter Username :<input type="text" placeholder="username" name="name"><br>
        Enter Email :<input type="text" placeholder="Email" name="email"><br>
        Enter Password :<input type="password" placeholder="Password" name="password"><br>
        Confirm Password :<input type="password" placeholder="Confirm Password" name="cpassword"><br>
                 
                <div class="signupbuttons">
                    <a href="login.php" class=extra><input type=submit name="submit"></a>
                    
               
    </div>
    </div>
	</div>
	</div>
	
</body>
</html>



