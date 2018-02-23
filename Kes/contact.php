<?php
    ob_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Kneen Electrical Services</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="styling.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Vollkorn" rel="stylesheet" type='text/css'>

      
  </head>
  <body>
      
      <nav role="navigation" class="navbar navbar-default, navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <div id="titleLogo">
          <a class="navbar-brand" href="index.php"><span><img id="logo" src="images/plugLogoPro-edit.png"></span></a>
            <p id="title1"><span class="blue">K</span>neen <span class="blue">E</span>lectrical <span class="blue">S</span>ervices</p>
                </div>
            <div id="number"><p>Call Now: 07814 553837</p></div>
                <div id="blueDot"></div>
        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="index.php" >Home</a></li>
            <li><a href="services.php">Services</a></li>
            <li><a href="testimonials.php">Testimonials</a></li>
            <li   class="active"><a href="contact.php">Contact<span class="sr-only">(current)</span></a></li>
          </ul>
        

            
        </div>
      </div>
    </nav>
      
      <div class="container" id="mainContainer">
          <div class="row">
              <div class="col-sm-offset-1 col-sm-10">
            
                  
                  <div class="contactContainer">
                      
                      <h1 id="contactTitle">Contact Us</h1>
                      
                      
                      <div class="callContainer">
                          
                          <div class="callBox">
                              <p>Feel free to call us for more information</p>
                              <p>On 07814 553837</p>
                          </div>

                      </div>
                      
                      
<?php                
 //getting user input
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
                      $postCode = $_POST["postCode"];
                      $mobile = $_POST["mobile"];
            
//error messages
$missingName = '<p><strong>Please Enter Your Name</strong></p>';
$missingEmail = '<p><strong>Please Enter Your Email Address</strong></p>';
                      $missingPostCode = '<p><strong>Please Enter Your Post Code</strong></p>';
                      $missingMobile = '<p><strong>Please Enter Your Mobile Number</strong></p>';
$invalidEmail = '<p><strong>Please Enter a valid Email Address</strong></p>';
$missingMessage = '<p><strong>Please Enter a Message</strong></p>';
            
            
//check if user has submitted form
if($_POST["submit"]){
    //check for errors in fields
    //if there is nothing in name field
        if(!$name){  
            $errors .= $missingName;
        }else{
            $name = filter_var($name, FILTER_SANITIZE_STRING);
        }
        if(!$email){  
            $errors .= $missingEmail;
        }else{
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $errors .= $invalidEmail;
            }
        }
        if(!$postCode){  
            $errors .= $missingpostCode;
        }else{
            $name = filter_var($name, FILTER_SANITIZE_STRING);
        }
        if(!$message){
            $errors .= $missingMessage;
        }else{
            $message = filter_var($message, FILTER_SANITIZE_STRING);
        }
    //if there are errors - print error message
        if($errors){
            $resultMessage = '<div class="alert alert-danger">' . $errors . '</div>';
        }else{  //if no errors send e-mail 
            
            $to = "tomk940@hotmail.com";
            $subject = "Contact Form";
            $message = "
            <p><strong>Name:</strong>  $name</p>
            <p><strong>Mobile:</strong>  $mobile</p>
            <p><strong>PostCode:</strong>  $postCode</p>
            <p><strong>Email:</strong>  $email</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>";
            $headers = "Content-type: text/html";
            
            if(mail($to, $subject, $message, $headers)){ //check if email has sent
                $resultMessage = '<div class="alert alert-success">Thanks for your message. We will get back to you as soon as possible.</div>';
                
//                header("Location: 20.thanksforyourmessage.php");
            }else{
                $resultMessage = '<div class="alert alert-warning">Unable to send Email. Please try again later!</div>';
            }
        } 
    echo $resultMessage;
}                     
                      
                      
                      
?>
                      
                      <div class="formContainer">
                          <div class="formBox">
                              
                              <p>Alternatively, you can fill in a form below and we shall get back to you as soon as possible</p>
                          </div>
                          
             
                          <form method="POST">
                <div class="form-group ">
                      <div class="input-group col-xs-4 box" id="name">
                          <span class="input-group-addon glyphicon glyphicon-user"></span>     
                          <input type="text" class="form-control" id="name" name="name" placeholder="Name" required value="<?php echo $_POST["name"]; ?>">
                      </div>
                </div>
                <div class="form-group">
                    <div class="input-group col-xs-4 box" id="email">
                        <span class="input-group-addon glyphicon glyphicon-envelope"></span>
                        <input type="text" class="form-control" id="email" name="email" placeholder="Email" required value="<?php echo $_POST["email"]; ?>">
                    </div>
                </div>
                  <div class="form-group">
                    <div class="input-group col-xs-4 box" id="mobile">
                        <span class="input-group-addon glyphicon glyphicon-earphone"></span>
                        <input type="text" class="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required value="<?php echo $_POST["mobile"]; ?>">
                    </div>
                </div>             
                <div class="form-group">
                    <div class="input-group col-xs-4 box" id="postCode">
                        <span class="input-group-addon glyphicon glyphicon-home"></span>
                        <input type="text" class="form-control" id="subject" name="postCode" placeholder="Post Code" required value="<?php echo $_POST["postCode"]; ?>">
                    </div>
                </div>              
                <div class="form-group">
                            <span class="input-group-addon glyphicon glyphicon-pencil" id="message"></span>
                             <textarea class="form-control" type="textarea" id="message" name="message" placeholder="Message" maxlength="500" rows="7"><?php echo $_POST["message"]; ?></textarea>
                             <span class="help-block"><p id="characterLeft" class="help-block ">You have reached the limit</p></span>
                        </div>
                <input type="submit" name="submit" class="btn btn-lg btn-success" value="Send Message">
            </form>
                          
                      </div>
                      
                      
                      
                      
                  
                  </div>
                  
                  
                  
                  
                  
                  
              </div>
          </div>


          
      </div>
      
      
      
      
      
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <script src="js/bootstrap.min.js"></script>
          <script src="script.js"></script>

  </body>
</html>
<?php
    ob_flush();
?>